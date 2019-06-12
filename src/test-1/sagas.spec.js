import {
  debounce,
  takeLatest,
  put,
  select,
} from 'redux-saga/effects'
import * as actions from './actions'
import * as sagas from './sagas'
import * as types from './constants'
import * as selectors from './selectors'

describe('test-1-sagas', () => {
  let next = null
  let expected = null

  it('should take and handle actions', () => {  
    const saga = sagas.sagas()

    next = saga.next()
    expected = debounce(200, types.ON_SEARCH_INPUT_CHANGE, sagas.handleSearchUsers)
    expect(next.value).toEqual(expected)

    next = saga.next()
    expected = takeLatest(types.SEARCH_USERS, sagas.handleSearchUsers)
    expect(next.value).toEqual(expected)

    next = saga.next()
    expected = takeLatest(types.LOAD_MORE_USERS, sagas.handleLoadMoreUsers)
    expect(next.value).toEqual(expected)

    expect(saga.next().done).toBeTruthy()
  })

  it('should handleSearchUsers', () => {
    const saga = sagas.handleSearchUsers()
    next = saga.next()
    expect(JSON.stringify(next.value)).toEqual(JSON.stringify(select(selectors.getQuery)))

    const query = {
      q: 'search string',
      page: 1,
      per_page: 5,
    }
    next = saga.next(query)
    expect(JSON.stringify(next.value)).toEqual(JSON.stringify(put(actions.fetchUsers(query))))
  })

  it('should handleLoadMoreUsers', () => {
    const saga = sagas.handleLoadMoreUsers()
    next = saga.next()
    expect(JSON.stringify(next.value)).toEqual(JSON.stringify(select(selectors.getQuery)))

    const query = {
      q: 'search string',
      page: 1,
      per_page: 5,
    }
    next = saga.next(query)
    expect(JSON.stringify(next.value)).toEqual(JSON.stringify(put(actions.fetchMoreUsers(query))))
  })

})
