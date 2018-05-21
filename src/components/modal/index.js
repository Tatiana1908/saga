import React, { Component } from 'react'

export default class Modal extends Component{
  onSubmitForm = (e) =>{
    e.preventDefault();
    if(this.nameInput && this.surnameInput.value && this.ageInput.value && this.statusInput.value){
      const newUser = {
        firstName: this.nameInput.value,
        lastName: this.surnameInput.value,
        age: this.ageInput.value,
        status: this.statusInput.value,
        visits: 0,
        progress: 0,
      };
      this.props.addNewUser(newUser)
      this.props.closeModal()
    }else{
      alert('Enter info')
    }
  };

  render() {

    if (this.props.isOpen) {
      return (
        <div className="overlay">
          <div className="modal">
            <div className="modal-header">
              <h4>New user</h4>
              <span onClick={this.props.closeModal}><i className="fas fa-times"></i></span>
            </div>
            <div className="modal-body">
              <form className="addForm" onSubmit={this.onSubmitForm}>
                <input type="text" placeholder="Name" ref={node => this.nameInput = node}/>
                <input type="text" placeholder="Surname" ref={node => this.surnameInput = node}/>
                <input type="text" placeholder="Age" ref={node => this.ageInput = node}/>
                <input type="text" placeholder="Status" ref={node => this.statusInput = node}/>
                <button className="btn-default">OK</button>
              </form>
            </div>
          </div>
        </div>)
      }else{
      return null
    }
  }
}
