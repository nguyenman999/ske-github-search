import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from './history'
import appReducer from './app/reducers'
import test1Reducer from './test-1/reducers'

export default combineReducers({
  router: connectRouter(history),
  appReducer,
  test1Reducer,
})
