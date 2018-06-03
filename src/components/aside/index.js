import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Aside extends Component {
  render() {
    return (
      <aside className="aside">
        <h3>Menu:</h3>
        <ul>
          <li className="aside-link"><Link to="/" >Home</Link></li>
          <li className="aside-link"><Link to="/users" >Users</Link></li>
        </ul>
      </aside>
    );
  }
}

