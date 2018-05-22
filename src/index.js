import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';


// import { Route } from 'react-router'
import { BrowserRouter, Switch} from 'react-router-dom'

// import Test from './components/new'
// import Aside from './components/aside/index';
import App from './components/app/app';
import theme from './styles/material-ui-theme';
import './App.css';
import store from './store/index'
// import SingleUserPage from './containers/single-user-page/index'

ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter >
          <App />
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
,document.getElementById('root'),
);
