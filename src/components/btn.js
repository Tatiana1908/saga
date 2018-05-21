import React, { Component } from 'react'


export default class AddUserBtn extends Component{
  onClick = (e) =>{
    e.preventDefault()
    this.props.openModal()
  }

  render(){
    return(
    <button onClick= {this.onClick} className="btn-default">Add user</button>)
  }
 }
