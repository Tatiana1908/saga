import React, { Component } from 'react'

import TableRow from '../table-row/index'

export default class TableWithUsers extends Component{
  componentDidMount() {
    // this.props.getUsers()
    console.log(this.props)
  }
  render() {
    return(
        <table>
          <TableRow />
        </table>
      )
  }
}
