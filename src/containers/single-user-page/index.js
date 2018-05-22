import { connect } from 'react-redux'

import SingleUser from '../../components/single-user-page/index'

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return {
    users: state.users,
  }
}


export default connect( mapStateToProps )(SingleUser)
