import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

import MainBlock from '../../containers/main-block'

class App extends Component {
  fetchUsers = () => {
    fetch('/api/users')
      .then(res => res.text())
      .then(alert)
      .catch(alert);
  }

  render() {
    return (
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
          <MainBlock />
        </div>

        {/*<Button*/}
          {/*variant="raised"*/}
          {/*color="secondary"*/}
          {/*onClick={this.fetchUsers}*/}
        {/*>*/}
          {/*Check server*/}
        {/*</Button>*/}
      </div>
    );
  }
}

export default App;
