import React from 'react'

import { HomeContext } from './homeContext'
import HomeView from './fragment/home'

function HomeContainer() {
  return (
    <HomeContext.Provider value={{}}>
      <HomeView />
    </HomeContext.Provider>
  )
}

export default HomeContainer
