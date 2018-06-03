import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class TableRow extends Component {
  render() {
    const { firstName, lastName, visits, age, progress, status } = this.props.userInfo;

    const name = firstName[0].toUpperCase() + firstName.slice(1);
    const surname = lastName[0].toUpperCase() + lastName.slice(1);

    return (
      <tr onClick={() => this.props.history.push(`user/${ this.props.userInfo.id }`)}>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{visits}</td>
        <td>{age}</td>
        <td>{progress}</td>
        <td>{status}</td>
      </tr>);
  }
}
TableRow.propTypes = {
  history: PropTypes.object,
  userInfo: PropTypes.object,
};
export default withRouter(TableRow);
