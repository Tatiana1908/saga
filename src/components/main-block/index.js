import React, { Component } from 'react'
import { Route } from 'react-router'
import { Switch} from 'react-router-dom'
import TableWithUsers from '../../containers/table-with-users/index'
import AddUserBtn from '../../containers/btn'
import Test from '../new'

export default class MainBlock extends Component {
  render () {
    return(
      <main>
        <AddUserBtn />
        <Switch>
          <Route exact path="user" component={TableWithUsers} />
          <Route exact path="test" component={Test} />
        </Switch>
      </main>
    )
  }
}
