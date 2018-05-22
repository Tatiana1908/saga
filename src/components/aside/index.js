import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Aside extends Component{
  render(){
    return(
      <aside>
        <h3>Menu:</h3>
        <br />
          <ul>
            <li><Link to="user" >Users</Link></li>
            <li><Link to="test" >Test</Link></li>
        </ul>
      </aside>
    )
  }

}
