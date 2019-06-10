import { fork } from 'redux-saga/effects'
import { sagas as fetchSagas } from './services/fetch/fetch-saga'
import { sagas as test1Sagas } from './test-1/sagas'

export function* sagas() {
  yield fork(fetchSagas)
  yield fork(test1Sagas)
}
