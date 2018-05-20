import { connect } from 'react-redux'

import MainBlock from '../../components/main-block'
// import { handleDelete, handleToggle } from '../../sagas/todo/actions'

const mapDispatchToProps = dispatch => {
  return {
    // handleDelete: (id) => dispatch(handleDelete(id)),
    // handleToggle: (id) => dispatch(handleToggle(id))
  }
}

export default connect(null, mapDispatchToProps)(MainBlock)
