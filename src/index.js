import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import App from './components/app/app';
import theme from './styles/material-ui-theme';
import './App.css';
import store from './store/index'



ReactDOM.render(
  <Router>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/users" component={App} />
      </div>
      </MuiThemeProvider>
    </Provider>
  </Router>
,
  document.getElementById('root'),
);
class Home extends  Component{
  render(){
    return(
      <h2>Hi</h2>
    )
  }
}
