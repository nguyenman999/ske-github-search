import React from 'react'
import { shallow } from 'enzyme'
import Test1 from './test-1'

describe('test-1-view', () => {
  let props

  beforeEach(() => {
    props = {
      q: 'search string',
      page: 1,
      loading: false,
      loadMore: false,
      list: [],
      actions: {
        onSearchInputChange: jest.fn(),
        searchUsers: jest.fn(),
        loadMoreUsers: jest.fn(),
      },
    }
  })

  it('render default', () => {
    const wrapper = shallow(<Test1 {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('render loadmore', () => {
    props = {
      ...props,
      loadMore: true,
      list: [
        {
          avatarUrl: 'avatarUrl',
          score: 123,
          login: 'login',
          type: 'type',
        },
      ],
    }
    const wrapper = shallow(<Test1 {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('onInputChange should dispatch action onSearchInputChange', () => {
    const wrapper = shallow(<Test1 {...props} />)
    const instance = wrapper.instance()
    instance.onInputChange({ target: 'target' })
    expect(props.actions.onSearchInputChange).toHaveBeenCalled()
  })

  it('onInputSearch should dispatch action searchUsers', () => {
    const wrapper = shallow(<Test1 {...props} />)
    const instance = wrapper.instance()
    instance.onInputSearch()
    expect(props.actions.searchUsers).toHaveBeenCalled()
  })

  it('onLoadMore should dispatch action loadMoreUsers', () => {
    const wrapper = shallow(<Test1 {...props} />)
    const instance = wrapper.instance()
    instance.onLoadMore()
    expect(props.actions.loadMoreUsers).toHaveBeenCalled()
  })

  it('renderItem', () => {
    const wrapper = shallow(<Test1 {...props} />)
    const instance = wrapper.instance()
    const result = instance.renderItem({
      avatarUrl: 'avatarUrl',
      score: 123,
      login: 'login',
      type: 'type',
    })
    expect(shallow(result)).toMatchSnapshot()
  })
})
