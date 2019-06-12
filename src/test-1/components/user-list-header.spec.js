import React from 'react'
import { shallow } from 'enzyme'
import UserListHeader from './user-list-header'

describe('user-list-header', () => {
  let props
  beforeEach(() => {
    props = {
      title: 'title',
      onChange: jest.fn(),
      onSearch: jest.fn(),
    }
  })

  it('render: default', () => {
    const wrapper = shallow(<UserListHeader {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
