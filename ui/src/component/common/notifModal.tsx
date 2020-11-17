import React, { useCallback, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { Subject } from 'rxjs'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

interface Props {
  header: string
  description: string
}

interface NotifData extends Props {
  open: boolean
}

const initNotifModal = {
  header: '',
  description: '',
}

const modalSubject = new Subject<NotifData>()

const NotifModal = () => {
  const classes = useStyles()
  const [{ open, header, description }, setData] = useState<NotifData>({ ...initNotifModal, open: false })
  const handleClose = useCallback(() => {
    setData({ header, description, open: false })
  }, [open])

  useEffect(() => {
    const modalSubcription = modalSubject.subscribe((props: NotifData) => {
      setData(props)
    })

    return () => {
      modalSubcription.unsubscribe()
    }
  })

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2>{header}</h2>
          <p>{description}</p>
        </div>
      </Fade>
    </Modal>
  )
}

NotifModal.open = (props: Props) => {
  modalSubject.next({ ...props, open: true })
}

NotifModal.close = () => {
  modalSubject.next({ ...initNotifModal, open: false })
}

export default NotifModal
