import { connect } from 'react-redux';

import AddUserBtn from '../components/button';
import { openModal } from '../store/main-store/actions';

const mapStateToProps = state => ({
  isOpen: state.reducer.isOpen,
});

const mapDispatchToProps = {
  openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserBtn);
