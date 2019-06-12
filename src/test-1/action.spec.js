import * as actions from './actions'
import * as types from './constants'
import convertParams from '../helpers/convert-params/convert-params'

describe('test-1-actions', () => {
  it('onSearchInputChange', () => {
    const result = actions.onSearchInputChange('search string')
    expect(result).toEqual({
      type: types.ON_SEARCH_INPUT_CHANGE,
      payload: {
        q: 'search string',
      },
    })
  })

  it('searchUsers', () => {
    const result = actions.searchUsers('search string')
    expect(result).toEqual({
      type: types.SEARCH_USERS,
      payload: {
        q: 'search string',
      },
    })
  })

  it('loadMoreUsers', () => {
    const result = actions.loadMoreUsers('search string', 1)
    expect(result).toEqual({
      type: types.LOAD_MORE_USERS,
      payload: {
        q: 'search string',
        page: 1,
      },
    })
  })

  it('fetchMoreUsers', () => {
    const given = { q: 'search string', page: 1, perPage: 5 }
    const result = actions.fetchMoreUsers(given)
    expect(result).toEqual({
      type: types.FETCH_MORE_USERS,
      meta: {
        request: {
          url: `/search/users?${convertParams({
            q: given.q,
            page: given.page,
            per_page: given.perPage,
          })}`,
          method: 'GET',
        },
      },
    })
  })

  it('fetchUsers', () => {
    const given = { q: 'search string', page: 1, perPage: 5 }
    const result = actions.fetchUsers(given)
    expect(result).toEqual({
      type: types.FETCH_USERS,
      meta: {
        request: {
          url: `/search/users?${convertParams({
            q: given.q,
            page: given.page,
            per_page: given.perPage,
          })}`,
          method: 'GET',
        },
      },
    })
  })
})
