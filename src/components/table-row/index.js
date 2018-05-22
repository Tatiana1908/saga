import React, { Component } from 'react'
import { withRouter } from 'react-router'

class TableRow extends Component{
  routeToUser = () =>{
    this.props.history.push(`user/${this.props.userInfo.id}`)
  }
  render() {
    const {firstName, lastName, visits, age, progress, status } = this.props.userInfo

    const name = firstName[0].toUpperCase() + firstName.slice(1);
    const surname = lastName[0].toUpperCase() + lastName.slice(1);


    return (<tr onClick={this.routeToUser}>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{visits}</td>
      <td>{age}</td>
      <td>{progress}</td>
      <td>{status}</td>
    </tr>
    )
  }
}

export default withRouter(TableRow)
