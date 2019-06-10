import React from 'react'
import renderer from 'react-test-renderer'
import Alignment from './alignment'

describe('View: Alignment', () => {
  it('Renders', () => {
    const tree = renderer
      .create(
        <Alignment className="foo">
          <Alignment.Left>left</Alignment.Left>
          <Alignment.Center className="fee">center with className</Alignment.Center>
          <Alignment.Right>right</Alignment.Right>
        </Alignment>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
