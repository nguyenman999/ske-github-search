import React from 'react'
import { shallow } from 'enzyme'
import Alignment from './alignment'

describe('View: Alignment', () => {
  it('Renders', () => {
    const TestComp = () => (
      <Alignment className="foo">
        <Alignment.Left>left</Alignment.Left>
        <Alignment.Center className="fee">center with className</Alignment.Center>
        <Alignment.Right>right</Alignment.Right>
      </Alignment>
    )
    const wrapper = shallow(<TestComp />)
    expect(wrapper).toMatchSnapshot()
  })
})
