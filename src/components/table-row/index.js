import React, { Component } from 'react'

export default class TableRow extends Component{
  render() {
    const firstName = this.props.userInfo.firstName[0].toUpperCase() + this.props.userInfo.firstName.slice(1);
    const lastName = this.props.userInfo.lastName[0].toUpperCase() + this.props.userInfo.lastName.slice(1)

    return (<tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{this.props.userInfo.visits}</td>
      <td>{this.props.userInfo.age}</td>
      <td>{this.props.userInfo.progress}</td>
      <td>{this.props.userInfo.status}</td>
    </tr>
    )
  }
}
