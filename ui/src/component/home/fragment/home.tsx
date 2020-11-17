import React from 'react'

import useStyles from './homeStyle'

function Home() {
  const style = useStyles()

  return <div className={style.home} />
}

export default Home
