import { connect } from 'react-redux';

import LoginForm from '../../components/login-form/index';
import { signUp } from '../../store/main-store/actions';

const mapStateToProps = (state) => {
  return {
    autorisedUser: state.reducer.autorisedUser,
  };
};
const mapDispatchToProps = {
  signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
