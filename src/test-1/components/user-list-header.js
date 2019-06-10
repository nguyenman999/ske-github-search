import React from 'react'
import PropTypes from 'prop-types'
import { Input, Typography } from 'antd'
import Alignment from '../../components/alignment/alignment'

const { Search } = Input
const { Title } = Typography

const UserListHeader = ({ title, onChange, onSearch }) => (
  <Alignment>
    <Alignment.Left>
      <Title level={4}>
        {title}
      </Title>
    </Alignment.Left>
    <Alignment.Right>
      <Search
        placeholder="Input search text"
        onChange={onChange}
        onSearch={onSearch}
        style={{ width: 400 }}
      />
    </Alignment.Right>
  </Alignment>
)

UserListHeader.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
}

UserListHeader.defaultProps = {
  title: '',
}

export default UserListHeader
