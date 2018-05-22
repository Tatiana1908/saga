import { connect } from 'react-redux'

import TableWithUsers from '../../components/table-with-users'
import { getUsers } from '../../store/table-with-users/actions'
// import {selectUsers} from '../../selectors/index'

const mapStateToProps = state => {
  console.log(state);
  return {
    users: state.reducer.users,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableWithUsers)
