import * as types from './constants'
import convertParams from '../helpers/convert-params/convert-params'

const onSearchInputChange = q => ({
  type: types.ON_SEARCH_INPUT_CHANGE,
  payload: {
    q,
  },
})

const searchUsers = q => ({
  type: types.SEARCH_USERS,
  payload: {
    q,
  },
})

const loadMoreUsers = (q, page) => ({
  type: types.LOAD_MORE_USERS,
  payload: {
    q,
    page,
  },
})

const fetchMoreUsers = query => ({
  type: types.FETCH_MORE_USERS,
  meta: {
    request: {
      url: `/search/users?${convertParams({
        q: query.q,
        page: query.page,
        per_page: query.perPage,
      })}`,
      method: 'GET',
    },
  },
})

const fetchUsers = query => ({
  type: types.FETCH_USERS,
  meta: {
    request: {
      url: `/search/users?${convertParams({
        q: query.q,
        page: query.page,
        per_page: query.perPage,
      })}`,
      method: 'GET',
    },
  },
})

export {
  onSearchInputChange,
  searchUsers,
  fetchUsers,
  loadMoreUsers,
  fetchMoreUsers,
}
