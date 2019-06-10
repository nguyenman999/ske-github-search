import { createSelector } from 'reselect'

export const getTest1Reducer = state => state.test1Reducer || {}

export const getList = createSelector(
  getTest1Reducer,
  ({ list }) => list,
)

export const getQuery = createSelector(
  getTest1Reducer,
  ({ q, page, perPage }) => ({ q, page, perPage }),
)

export const getLoadMore = createSelector(
  getTest1Reducer,
  ({ loadMore }) => loadMore,
)
