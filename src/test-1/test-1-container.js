
/* eslint-disable */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onSearchInputChange, searchUsers, loadMoreUsers } from './actions'
import { getList, getQuery, getLoadMore } from './selectors'
import { getLoadingWithKey } from '../app/selectors'
import * as types from './constants'
import Test1 from './test-1'

export const mapStateToProps = (state) => {
  const query = getQuery(state)
  return {
    loading: getLoadingWithKey(types.FETCH_USERS)(state),
    list: getList(state),
    ...query,
    loadMore: getLoadMore(state),
  }
}

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      onSearchInputChange,
      searchUsers,
      loadMoreUsers,
    },
    dispatch,
  ),
})

export default connect(mapStateToProps, mapDispatchToProps)(Test1)
