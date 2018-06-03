import { connect } from 'react-redux';

import Modal from '../../components/modal/index';
import { openModal } from '../../store/main-store/actions';
import { addNewUser } from '../../store/main-store/actions';
const mapStateToProps = state => {
  return {
    isOpen: state.reducer.isOpen,
  };
};

const mapDispatchToProps = {
  closeModal: openModal,
  addNewUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
