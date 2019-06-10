import React from 'react'
import { Button } from 'antd'
import styles from './app.module.less'

const App = () => (
  <div>
    <Button type="primary">Primary</Button>
    <div className={styles.test}>test</div>
  </div>
)

export default App
