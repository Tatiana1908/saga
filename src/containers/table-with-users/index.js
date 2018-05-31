import { connect } from 'react-redux';

import TableWithUsers from '../../components/table-with-users';
import { getUsers } from '../../store/table-with-users/actions';

const mapStateToProps = state => {
  return {
    users: state.reducer.users,
    filteredUsers: state.reducer.filteredUsers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableWithUsers);
