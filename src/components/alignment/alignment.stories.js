import React from 'react'
import { storiesOf } from '@storybook/react'

import Alignment from './alignment'

storiesOf('Alignment', module)
  .add('add Alignment.Right', () =>
    <Alignment><Alignment.Right>Foo</Alignment.Right></Alignment>,
  )
  .add('add Alignment.Center', () =>
    <Alignment><Alignment.Center>Foo</Alignment.Center></Alignment>,
  )
  .add('add Alignment.Left', () =>
    <Alignment><Alignment.Left>Foo</Alignment.Left></Alignment>,
  )
