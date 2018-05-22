import FilterForm from "../../components/filter";
import {connect} from "react-redux";

import {getUsersByFilter} from "../../store/table-with-users/actions";

const mapStateToProps = state => {
  return {
    filteredUser: state.reducer.filteredUser
  }
}

const mapDispatchToProps = {
  getUsersByFilter,
 }
export default connect(mapStateToProps, mapDispatchToProps)(FilterForm)


