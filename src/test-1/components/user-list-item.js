import React from 'react'
import PropTypes from 'prop-types'
import { List, Skeleton, Avatar } from 'antd'

const UserListItem = ({
  avatarUrl, type, login, score, loading,
}) => (
  <List.Item>
    <Skeleton avatar title={false} loading={loading} active>
      <List.Item.Meta
        avatar={
          <Avatar src={avatarUrl} />
        }
        title={login}
        description={type}
      />
      <div>{score}</div>
    </Skeleton>
  </List.Item>
)

UserListItem.propTypes = {
  loading: PropTypes.bool,
  avatarUrl: PropTypes.string,
  score: PropTypes.number,
  login: PropTypes.string,
  type: PropTypes.string,
}

UserListItem.defaultProps = {
  loading: false,
  avatarUrl: '',
  score: 0,
  login: '',
  type: '',
}

export default UserListItem
