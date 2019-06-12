import * as selectors from './selectors'

describe('test-1-selectors', () => {
  it('getTest1Reducer', () => {
    const givenState1 = {
      test1Reducer: {
        a: 'test',
      },
    }
    const result1 = selectors.getTest1Reducer(givenState1)
    expect(result1).toEqual({ a: 'test' })

    const givenState2 = {}
    const result2 = selectors.getTest1Reducer(givenState2)
    expect(result2).toEqual({})
  })

  it('getList', () => {
    const givenState = {
      test1Reducer: {
        list: [],
      },
    }
    const result = selectors.getList(givenState)
    expect(result).toEqual(givenState.test1Reducer.list)
  })

  it('getQuery', () => {
    const givenState = {
      test1Reducer: {
        q: 'search string',
        page: 1,
        perPage: 5,
      },
    }
    const result = selectors.getQuery(givenState)
    expect(result).toEqual({ ...givenState.test1Reducer })
  })

  it('getLoadMore', () => {
    const givenState = {
      test1Reducer: {
        loadMore: false,
      },
    }
    const result = selectors.getLoadMore(givenState)
    expect(result).toEqual(givenState.test1Reducer.loadMore)
  })
})
