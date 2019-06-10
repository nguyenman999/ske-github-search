import * as types from './constants'

export const initialState = {
  loadMore: false,
  q: '',
  page: 1,
  perPage: 5,
  data: [],
  list: [],
}

const parseItems = items => (
  items.map(item => ({
    avatarUrl: item.avatar_url,
    type: item.type,
    login: item.login,
    score: item.score,
  }))
)

export default function test1(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_MORE_USERS:
      return {
        ...state,
        page: action.payload.page,
        list: state.data.concat([...new Array(3)].map(() => ({ loading: true }))),
      }
    case types.FETCH_MORE_USERS_SUCCESS: {
      const data = state.data.concat(parseItems(action.payload.items))
      return {
        ...state,
        data,
        list: data,
      }
    }
    case types.FETCH_MORE_USERS_FAILURE:
      return {
        ...state,
        loadMore: false,
        list: state.data,
      }
    case types.ON_SEARCH_INPUT_CHANGE:
      return {
        ...state,
        q: action.payload.q,
        page: 1,
      }
    case types.SEARCH_USERS:
      return {
        ...state,
        q: action.payload.q,
        page: 1,
      }
    case types.FETCH_USERS_SUCCESS: {
      const data = parseItems(action.payload.items)
      return {
        ...state,
        loadMore: true,
        data,
        list: data,
      }
    }
    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        ...initialState,
      }
    default:
      return state
  }
}
