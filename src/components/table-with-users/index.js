import React, { Component } from 'react';

import TableRow  from '../table-row/index';
import PropTypes from 'prop-types';

export default class TableWithUsers extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <table>
        <thead className="table-header">
          <th>Name</th>
          <th>LastName</th>
          <th>Visits</th>
          <th>Age</th>
          <th>Progress</th>
          <th>Status</th>
        </thead>
        <tbody className="table-body">
          {this.props.users.map( user => <TableRow key={user.id} userInfo={user} /> )}
        </tbody>
      </table>
    );
  }
}

TableWithUsers.propTypes = {
  filteredUsers: PropTypes.array,
  users: PropTypes.array,
  getUsers: PropTypes.func,
};
