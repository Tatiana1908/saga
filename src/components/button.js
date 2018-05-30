import React, { Component } from 'react'


export default class AddUserBtn extends Component{
  onClick = () =>{
    this.props.openModal()
  }

  render(){
    return(
    <button onClick={this.onClick} className="btn-default">Add user</button>)
  }
 }
