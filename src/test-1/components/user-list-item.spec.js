import React from 'react'
import { shallow } from 'enzyme'
import UserListItem from './user-list-item'

describe('user-list-item', () => {
  let props
  beforeEach(() => {
    props = {
      loading: false,
      avatarUrl: 'avatarUrl',
      score: 123,
      login: 'login',
      type: 'type',
    }
  })

  it('render: default', () => {
    const wrapper = shallow(<UserListItem {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
