import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';


import App from './components/app/app';
import theme from './styles/material-ui-theme';
import './App.css';
import store from './store/index'


ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>

,document.getElementById('root'),

);
