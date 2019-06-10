import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './alignment.module.less'

const createComponent = (type) => {
  const Component = ({ className, ...props }) => (<div className={classNames(styles[type], className)} {...props} />)

  Component.propTypes = {
    className: PropTypes.string,
  }

  Component.defaultProps = {
    className: '',
  }

  return Component
}

const Alignment = createComponent('container')
Alignment.displayName = 'Alignment'

Alignment.Left = createComponent('left')
Alignment.Left.displayName = 'Alignment.Left'

Alignment.Center = createComponent('center')
Alignment.Center.displayName = 'Alignment.Center'

Alignment.Right = createComponent('right')
Alignment.Right.displayName = 'Alignment.Right'

export default Alignment
