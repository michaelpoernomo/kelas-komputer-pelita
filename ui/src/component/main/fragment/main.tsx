import React, { useCallback, useContext, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Grid, Button, TextField, InputLabel, FormHelperText, FormControl, NativeSelect } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import RoutePath from '@src/config/route'
import { StoreState } from '@src/controller/storeState'
import AccountAction from '@src/controller/account'
import { MainContext } from '@src/component/main/mainContext'
import NotifModal from '@src/component/common/notifModal'
import { successSubject, errorSubject } from '@src/utils/response'
import logo from '@src/assets/logo.jpg'
import useStyle from './mainStyle'

function MainView() {
  const style = useStyle()
  const history = useHistory()
  const { getMuridList, getAccountSession } = useContext(MainContext)
  const { muridList } = useSelector((state: StoreState) => ({
    muridList: state.murid.muridList,
  }))
  const formRef = {
    nama: useRef<HTMLInputElement>(null),
    nomer: useRef<HTMLInputElement>(null),
  }
  const handleLogin = useCallback(() => {
    getAccountSession({ nama: formRef.nama.current?.value || '', nomer: formRef.nomer.current?.value || '' })
  }, [formRef])

  useEffect(() => {
    getMuridList()
    const success = successSubject.subscribe([AccountAction.GET_SUCCESS], () => {
      history.push(RoutePath.home)
    })
    const error = errorSubject.subscribe([AccountAction.GET_SESSION_FAILED], () => {
      NotifModal.open({
        header: 'Login error',
        description: 'Pastikan nama dan nomer HP yang dimasukkan benar.',
      })
    })

    return () => {
      success.unsubscribe()
      error.unsubscribe()
    }
  }, [])

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={6}
      className={style['page-container']}
    >
      <img className={style['logo-img']} src={logo} alt="Pelita" />
      <FormControl fullWidth className={style['page-control']}>
        <InputLabel shrink>Name</InputLabel>
        <NativeSelect inputRef={formRef.nama}>
          {muridList.map(nama => (
            <option key={nama} value={nama}>
              {nama}
            </option>
          ))}
        </NativeSelect>
        <FormHelperText>Pilih nama kalian.</FormHelperText>
        <TextField
          required
          label="Nomer HP"
          inputRef={formRef.nomer}
          onChange={ev => {
            ev.target.value = ev.target.value.replace(/[^0-9]/g, '')
          }}
        />

        <Button
          className={style['submit-button']}
          type="submit"
          variant="outlined"
          color="primary"
          onClick={handleLogin}
        >
          Login
        </Button>
      </FormControl>
    </Grid>
  )
}

export default MainView
