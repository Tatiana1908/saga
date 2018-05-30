import React, { Component } from 'react'

import TableRow from '../table-row/index'


export default class TableWithUsers extends Component{
  componentDidMount() {
    this.props.getUsers()
  }
  render() {
    return(
        <table>
          <thead className ="table-header">
            <th>Name</th>
            <th>LastName</th>
            <th>Visits</th>
            <th>Age</th>
            <th>Progress</th>
            <th>Status</th>
          </thead>
          <tbody className="table-body">
            {
              this.props.filteredUsers.length
              ? this.props.filteredUsers.map(user => <TableRow key ={user.id} userInfo={user} />)
              : this.props.users.map( user => <TableRow key ={user.id} userInfo={user} /> )
            }
          </tbody>
        </table>
      )
    }
  }

