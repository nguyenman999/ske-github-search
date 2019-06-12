import { mapStateToProps, mapDispatchToProps } from './test-1-container'

describe('test-1-container', () => {
  it('mapStateToProps', () => {
    expect(
      mapStateToProps({
        test1Reducer: {
          loadMore: false,
          q: '',
          page: 1,
          perPage: 5,
          data: [],
          list: [],
        },
        appReducer: {
          loading: {
            FETCH_USERS: false,
          },
        },
      }),
    ).toMatchObject({
      loading: false,
      list: [],
      q: '',
      page: 1,
      perPage: 5,
      loadMore: false,
    })
  })

  it('mapDispatchToProps', () => {
    expect(mapDispatchToProps('dispatch')).toMatchObject({
      actions: {},
    })
  })
})
