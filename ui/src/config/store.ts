import { createStore, applyMiddleware, Middleware } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'

import rootEpic from '@src/controller/rootEpic'
import rootReducer from '@src/controller/rootReducer'
import { storePreloadState } from '@src/controller/storeState'

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV === 'development') {
    const logger: any = createLogger({ diff: true, collapsed: true })
    return applyMiddleware(...middleware, logger)
  }
  return applyMiddleware(...middleware)
}

export default function configureStore(initialState = storePreloadState) {
  const epicMiddleware = createEpicMiddleware()

  const store = createStore(rootReducer, initialState, bindMiddleware([epicMiddleware]))
  epicMiddleware.run(rootEpic)

  return store
}
