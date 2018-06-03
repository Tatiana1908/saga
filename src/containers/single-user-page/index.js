import { connect } from 'react-redux';

import SingleUserPage from '../../components/single-user-page/index';
import {findUser, deleteUser, editUser} from '../../store/table-with-users/actions';

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
    user: state.reducer.activeUser,
  };
};
const mapDispatchToProps = {
  deleteUser,
  findUser,
  editUser,
};

export default connect( mapStateToProps, mapDispatchToProps)(SingleUserPage);
