
import TableWithUsers from '../../components/table-with-users'
import { getUsers } from '../../store/table-with-users/actions'

const mapStateToProps = state => {
  return {
    users: createTodoListSelector(prop('users')),

  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableWithUsers)
