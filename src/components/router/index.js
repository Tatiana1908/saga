import React, { Component } from 'react'
import { Route } from 'react-router'
import { Switch} from 'react-router-dom'
import MainBlock from '../../containers/main-block/index'
import SingleUser from '../../containers/single-user-page/index'
import Start from '../first-screen'

export default class Router extends Component {
  render () {
    return(
      <Switch>
        <Route exact path="/users" component={MainBlock} />
        <Route exact path="/" component={Start} />
        <Route path="/user/:id" component={SingleUser} />
      </Switch>
    )
  }
}
