import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

export class SingleUserPage extends Component {
  state = {
    edit: false,
  };
  componentWillMount() {
    this.id = Number( this.props.ownProps.match.params.id );
    this.props.findUser( this.id );
  }
  onDeleteUser() {
    const confirm = window.confirm('Are you sure?');

    if (confirm) {
      this.props.deleteUser(this.id);
      this.props.history.goBack();
    }
  }
  onEditUser() {
    this.setState({edit: !this.state.edit});
  }
  onConfirmEditUser() {
    const inputs = this.editForm.querySelectorAll('input');
    const dataFromInputs = {};
    inputs.forEach(input => (dataFromInputs[input.name] = input.value.toLowerCase()));
    dataFromInputs.id = this.id;
    this.props.editUser(dataFromInputs);
    this.props.findUser( this.id );
    setInterval(() =>{
      this.setState({edit: !this.state.edit});
    }, 500);
  }
  onCancelEditUser() {
    this.setState({edit: !this.state.edit});
  }
  render() {
    const user = this.props.user[0];
    if (user) {
      const { firstName, lastName, age, visits, progress, status} = user;
      const name = firstName[0].toUpperCase() + firstName.slice(1);
      const surname = lastName[0].toUpperCase() + lastName.slice(1);
      if (this.state.edit) {
        return (
          <form action="" className="user-edit-form" ref={ node => (this.editForm = node) }>
            <div className="actionsWithUserBtns">
              <button className="btn-default apply-changes-btn" onClick={this.onConfirmEditUser.bind(this)}>Ok</button>
              <button className="btn-default cancel-btn" onClick={this.onCancelEditUser.bind(this)}>Cancel</button>
            </div>
            <div>
              <span className="field-name">Name: </span>
              <input type="text" defaultValue={name} name="firstName"/>
            </div>
            <div>
              <span className="field-name">Surname: </span>
              <input type="text" defaultValue={surname} name="lastName"/>
            </div>
            <div>
              <span className="field-name">Age: </span>
              <input type="text" defaultValue={age} name="age"/>
            </div>
            <div>
              <span className="field-name">Visits: </span>
              <input type="text" defaultValue={visits} name="visits"/>
            </div>
            <div>
              <span className="field-name">Progress: </span>
              <input type="text" defaultValue={progress} name="progress"/>
            </div>
            <div>
              <span className="field-name">Status: </span>
              <input type="text" defaultValue={status} name="status"/>
            </div>
          </form>
        );
      }
      return (
        <div className="user">
          <div className="actionsWithUserBtns">
            <button className="btn-default remove-btn" onClick={this.onDeleteUser.bind(this)}>Del</button>
            <button className="btn-default edit-btn" onClick={this.onEditUser.bind(this)}>Edit</button>
          </div>
          <div className="personal-user-info-block">
            <span className="field-name">Name: </span>
            <span className="value">{name}</span>
          </div>
          <div className="personal-user-info-block">
            <span className="field-name">Surname: </span>
            <span className="value">{surname}</span>
          </div>
          <div className="personal-user-info-block">
            <span className="field-name">Age: </span>
            <span className="value">{age}</span>
          </div>
          <div className="personal-user-info-block">
            <span className="field-name">Visits: </span>
            <span className="value">{visits}</span>
          </div>
          <div className="personal-user-info-block">
            <span className="field-name">Progress: </span>
            <span className="value">{progress}</span>
          </div>
          <div className="personal-user-info-block">
            <span className="field-name">Status: </span>
            <span className="value">{status}</span>
          </div>
        </div>);
    }
    return <div className="user"> User not found </div>;
  }
}
SingleUserPage.propTypes = {
  history: PropTypes.object,
  deleteUser: PropTypes.func,
  findUser: PropTypes.func,
  ownProps: PropTypes.array,
  user: PropTypes.array,
};

export default withRouter(SingleUserPage);
