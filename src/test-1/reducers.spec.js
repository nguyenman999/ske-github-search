import test1Reducer, { initialState, parseItems } from './reducers'
import * as types from './constants'

describe('test-1-reducer', () => {
  it('returns initial state', () => {
    expect(test1Reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle action LOAD_MORE_USERS', () => {
    const givenAction = {
      type: types.LOAD_MORE_USERS,
      payload: {
        q: 'search string',
        page: 1,
      },
    }
    expect(test1Reducer(undefined, givenAction)).toEqual({
      ...initialState,
      page: givenAction.payload.page,
      list: initialState.data.concat([...new Array(3)].map(() => ({ loading: true }))),
    })
  })

  it('should handle action FETCH_MORE_USERS_SUCCESS', () => {
    const givenAction = {
      type: types.FETCH_MORE_USERS_SUCCESS,
      payload: {
        items: [{
          avatar_url: 'avatar_url',
          type: 'type',
          login: 'login',
          score: 123,
        }],
      },
    }
    const data = initialState.data.concat(parseItems(givenAction.payload.items))
    expect(test1Reducer(undefined, givenAction)).toEqual({
      ...initialState,
      data,
      list: data,
    })
  })

  it('should handle action FETCH_MORE_USERS_FAILURE', () => {
    const givenAction = {
      type: types.FETCH_MORE_USERS_FAILURE,
    }
    expect(test1Reducer(undefined, givenAction)).toEqual({
      ...initialState,
      loadMore: false,
      list: initialState.data,
    })
  })

  it('should handle action ON_SEARCH_INPUT_CHANGE', () => {
    const givenAction = {
      type: types.ON_SEARCH_INPUT_CHANGE,
      payload: {
        q: 'search string',
      },
    }
    expect(test1Reducer(undefined, givenAction)).toEqual({
      ...initialState,
      q: givenAction.payload.q,
      page: 1,
    })
  })

  it('should handle action SEARCH_USERS', () => {
    const givenAction = {
      type: types.SEARCH_USERS,
      payload: {
        q: 'search string',
      },
    }
    expect(test1Reducer(undefined, givenAction)).toEqual({
      ...initialState,
      q: givenAction.payload.q,
      page: 1,
    })
  })

  it('should handle action FETCH_USERS_SUCCESS', () => {
    const givenAction = {
      type: types.FETCH_USERS_SUCCESS,
      payload: {
        items: [{
          avatar_url: 'avatar_url',
          type: 'type',
          login: 'login',
          score: 123,
        }],
      },
    }
    const data = initialState.data.concat(parseItems(givenAction.payload.items))
    expect(test1Reducer(undefined, givenAction)).toEqual({
      ...initialState,
      loadMore: true,
      data,
      list: data,
    })
  })

  it('should handle action FETCH_USERS_FAILURE', () => {
    const givenAction = {
      type: types.FETCH_USERS_FAILURE,
    }
    expect(test1Reducer(undefined, givenAction)).toEqual({
      ...initialState,
    })
  })
})
