import React, { PropsWithChildren } from 'react'
import { Grid } from '@material-ui/core'

import bg from '@src/assets/bg.mp4'
import useStyle from './layoutStyle'

function Layout(props: PropsWithChildren<any>) {
  const { children } = props
  const style = useStyle()

  return (
    <div className={style.body}>
      <div className={style.container}>
        <video autoPlay muted loop className={style.video}>
          <source src={bg} type="video/mp4" />
        </video>
      </div>
      <Grid container direction="row" justify="center" alignItems="center" className={style.container}>
        {children}
      </Grid>
    </div>
  )
}

export default Layout
