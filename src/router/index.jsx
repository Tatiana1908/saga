import React, { Component } from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import MainBlock from '../components/main-block/index';
import UserPage from '../containers/single-user-page/index';
import Start from '../components/first-screen';
import LoginForm from '../containers/login-form/index';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/users" component={MainBlock} />
        <Route exact path="/" component={Start} />
        <Route path="/user/:id" component={UserPage} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    );
  }
}
