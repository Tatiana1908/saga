import React, { Component } from 'react';
import { withRouter } from 'react-router';


export class SingleUserPage extends Component{

  componentWillMount(){
    this.id = Number(this.props.ownProps.match.params.id);
    this.props.findUser( this.id )
  }
  onDeleteUser() {

    let confirm = window.confirm('Are you sure?');

    if (confirm) {
      this.props.deleteUser(this.id)
      this.props.history.goBack()
    }
  }

  render() {
      const user = this.props.user[0];
      if(user) {
        const { firstName, lastName, age, visits, progress, status} = user;
        let name = firstName[0].toUpperCase() + firstName.slice(1);
        let surname = lastName[0].toUpperCase() + lastName.slice(1);
        return(
          <div className="user">
            <button className="btn-default remove-btn" onClick={this.onDeleteUser.bind(this)}>Del</button>
            <span className="field-name">Name: </span>
            <span className="value">{name}</span>
            <br />
            <span className="field-name">Surname: </span>
            <span className="value">{surname}</span>
            <br />
            <span className="field-name">Age: </span>
            <span className="value">{age}</span>
            <br />
            <span className="field-name">Visits: </span>
            <span className="value">{visits}</span>
            <br />
            <span className="field-name">Progress: </span>
            <span className="value">{progress}</span>
            <br />
            <span className="field-name">Status: </span>
            <span className="value">{status}</span>
            <br />
          </div>)
      } else{
        return (null)
      }
  }
}

export default withRouter(SingleUserPage)
