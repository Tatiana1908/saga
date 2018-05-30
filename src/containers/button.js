import { connect } from 'react-redux'

import AddUserBtn from '../components/button'
import { openModal } from '../store/add-user-btn/index'

const mapStateToProps = state => {
  return {
    isOpen: state.reducer.isOpen
  }
}

const mapDispatchToProps = {
 openModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserBtn)
