import React, { Component } from 'react';
import { withRouter } from 'react-router';


class SingleUserPage extends Component{

  componentWillMount(){
    this.id = Number(this.props.ownProps.match.params.id);
    this.props.findUser( this.id )
  }
  onDeleteUser = (e) => {
    e.preventDefault()
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
            <button className="btn-default remove-btn" onClick={this.onDeleteUser}>Del</button>
            <span className="field-name">Name: </span>
            <span>{name}</span>
            <br />
            <span className="field-name">Surname: </span>
            <span>{surname}</span>
            <br />
            <span className="field-name">Age: </span>
            <span>{age}</span>
            <br />
            <span className="field-name">Visits: </span>
            <span>{visits}</span>
            <br />
            <span className="field-name">Progress: </span>
            <span>{progress}</span>
            <br />
            <span className="field-name">Status: </span>
            <span>{status}</span>
            <br />
          </div>)
      } else{
        return (null)
      }
  }
}

export default withRouter(SingleUserPage)
