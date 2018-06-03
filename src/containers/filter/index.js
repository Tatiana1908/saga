import FilterForm from '../../components/filter';
import { connect } from 'react-redux';

import { getUsersByFilter } from '../../store/main-store/actions';

const mapStateToProps = state => {
  return {
    filteredUser: state.reducer.filteredUser,
  };
};

const mapDispatchToProps = {
  getUsersByFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);


