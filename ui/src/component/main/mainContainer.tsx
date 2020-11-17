import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { getMuridListAction } from '@src/controller/murid'
import { getAccountSessionAction } from '@src/controller/account'
import { MainContext } from './mainContext'
import MainView from './fragment/main'

function Main() {
  const dispatch = useDispatch()

  return (
    <MainContext.Provider
      value={{
        getMuridList: useCallback(() => dispatch(getMuridListAction()), [dispatch]),
        getAccountSession: useCallback(
          (payload: { nama: string; nomer: string }) => dispatch(getAccountSessionAction(payload)),
          [dispatch],
        ),
      }}
    >
      <MainView />
    </MainContext.Provider>
  )
}

export default Main
