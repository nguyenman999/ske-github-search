import React from 'react'
import PropTypes from 'prop-types'
import { List, Button } from 'antd'
import UserListHeader from './components/user-list-header'
import UserListItem from './components/user-list-item'
import styles from './test-1.module.less'

class UserList extends React.Component {
  onInputChange = (event) => {
    const { value } = event.target
    const { actions } = this.props
    const { onSearchInputChange } = actions
    onSearchInputChange(value)
  }

  onInputSearch = (value) => {
    const { actions } = this.props
    const { searchUsers } = actions
    searchUsers(value)
  }

  onLoadMore = () => {
    const {
      actions,
      q,
      page,
    } = this.props
    const { loadMoreUsers } = actions
    loadMoreUsers(q, page + 1)
  }

  renderHeader = () => (<UserListHeader title="Github Search User" onChange={this.onInputChange} onSearch={this.onInputSearch} />)

  renderItem = item => (<UserListItem {...item} />)

  render() {
    const { list, loading, loadMore } = this.props

    const renderLoadmore = loadMore ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={this.onLoadMore}>loading more</Button>
      </div>
    ) : null

    return (
      <div className={styles.container}>
        <List
          header={this.renderHeader()}
          loading={loading}
          loadMore={renderLoadmore}
          dataSource={list}
          renderItem={this.renderItem}
        />
      </div>
    )
  }
}

UserList.propTypes = {
  q: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  loadMore: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    avatarUrl: PropTypes.string,
    login: PropTypes.string,
    type: PropTypes.string,
    score: PropTypes.number,
  })).isRequired,
  actions: PropTypes.shape({
    onSearchInputChange: PropTypes.func.isRequired,
    searchUsers: PropTypes.func.isRequired,
    loadMoreUsers: PropTypes.func.isRequired,
  }).isRequired,
}

export default UserList
