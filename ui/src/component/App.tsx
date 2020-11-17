import React from 'react'
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core'

import Main from '@src/component/main'
import Home from '@src/component/home'
import AuthRoute from '@src/component/common/authRoute'
import NotifModal from '@src/component/common/notifModal'
import store from '@src/config/store'
import routePath from '@src/config/route'
import Layout from './layout'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
})

function App() {
  return (
    <Provider store={store()}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <NotifModal />
          <Router>
            <Switch>
              <Route exact path={routePath.root} component={Main} />
              <AuthRoute exact path={routePath.home} component={Home} />
              <Redirect to={routePath.root} />
            </Switch>
          </Router>
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

export default App
