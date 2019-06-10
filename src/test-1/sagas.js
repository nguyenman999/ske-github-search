/* eslint-disable */
import {
  debounce,
  takeLatest,
  put,
  call,
  select,
} from 'redux-saga/effects'
import * as types from './constants'
import { getQuery } from './selectors'
import { fetchUsers, fetchMoreUsers } from './actions'


export function* handleSearchUsers() {
  const query = yield select(getQuery)
  yield put(fetchUsers(query))
}

export function* handleLoadMoreUsers() {
  const query = yield select(getQuery)
  yield put(fetchMoreUsers(query))
}

export function* handleFetchUsersSuccess() {
  yield call(console.log, 'dad')
}

export function* handleFetchUsersFailure() {
  yield call(console.log, 'dad')
}

export const sagas = function* () {
  yield debounce(200, types.ON_SEARCH_INPUT_CHANGE, handleSearchUsers)
  yield takeLatest(types.SEARCH_USERS, handleSearchUsers)
  yield takeLatest(types.LOAD_MORE_USERS, handleLoadMoreUsers)
  yield takeLatest(types.FETCH_USERS_SUCCESS, handleFetchUsersSuccess)
  yield takeLatest(types.FETCH_USERS_FAILURE, handleFetchUsersFailure)
}
