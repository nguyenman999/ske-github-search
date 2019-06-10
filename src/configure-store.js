import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import reduxLogger from 'redux-logger'
import rootReducer from './root-reducer'
import history from './history'
import { sagas } from './sagas'

const configureStore = () => {
  const middlewares = []
  // config saga
  const sagaMiddleware = createSagaMiddleware()
  middlewares.push(sagaMiddleware)

  // config router
  const connectedReactRouterMiddleware = routerMiddleware(history)
  middlewares.push(connectedReactRouterMiddleware)

  // config logger
  if (process.env.REACT_APP_DEBUG) {
    middlewares.push(reduxLogger)
  }

  // create store
  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
  )

  // start saga
  sagaMiddleware.run(sagas)

  return store
}

export default configureStore
