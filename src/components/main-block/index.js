import React, { Component } from 'react'
import TableWithUsers from '../../containers/table-with-users/index'
import AddUserBtn from '../../containers/btn'
import FilterForm from "../../containers/filter";


export default class MainBlock extends Component {
  render () {
    return(
      <main>
        <AddUserBtn />
        <FilterForm />
        <TableWithUsers/>
      </main>
    )
  }
}
