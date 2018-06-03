import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { BrowserRouter } from 'react-router-dom';

import Router from '../../router/index';
import Aside from '../aside/index';
import Modal from '../../containers/add-new-user-modal/index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppBar position="fixed">
            <Toolbar>
              <IconButton className="App-menu-btn" color="inherit" aria-label="Menu">
                <Icon> menu </Icon>
              </IconButton>
              <Typography variant="title" color="inherit" className="App-header-title">
                React Admin
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <div className="App-intro">
            <Aside />
            <Router />
            <Modal />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
