import { connect } from 'react-redux'

import Modal from '../../components/modal/index'
import { openModal } from '../../store/add-user-btn/index'
import { addNewUser } from '../../store/table-with-users/actions'
const mapStateToProps = state => {
  return {
    isOpen: state.isOpen
  }
}

const mapDispatchToProps = {
    closeModal: openModal,
    addNewUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
