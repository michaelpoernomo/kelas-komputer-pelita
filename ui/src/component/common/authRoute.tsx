import React, { PropsWithChildren, useEffect, useState } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import RoutePath from '@src/config/route'
import AccountAction, { getAccountValidationAction } from '@src/controller/account'
import { errorSubject } from '@src/utils/response'

interface AuthRouteProps extends RouteProps {}

function AuthRoute(props: PropsWithChildren<AuthRouteProps>) {
  const dispatch = useDispatch()
  const [authFailed, setAuthFailed] = useState(false)

  useEffect(() => {
    dispatch(getAccountValidationAction())
    const errorSubscription = errorSubject.subscribe([AccountAction.GET_VALIDATION_FAILED], () => {
      setAuthFailed(true)
    })
    return () => {
      errorSubscription.unsubscribe()
    }
  }, [])
  /* eslint-disable react/jsx-props-no-spreading */
  return authFailed ? <Redirect to={RoutePath.root} /> : <Route {...props} />
}

export default AuthRoute
