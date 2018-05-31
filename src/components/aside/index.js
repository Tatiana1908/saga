import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Aside extends Component {
  render() {
    return (
      <aside>
        <h3>Menu:</h3>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/users" >Users</Link></li>
        </ul>
      </aside>
    );
  }
}

