import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

export class SingleUserPage extends Component {
  componentWillMount() {
    console.log(this.props);
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

  render() {
    const user = this.props.user[0];
    if (user) {
      const { firstName, lastName, age, visits, progress, status} = user;
      const name = firstName[0].toUpperCase() + firstName.slice(1);
      const surname = lastName[0].toUpperCase() + lastName.slice(1);
      return (
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
        </div>);
    }
    return <div> Some text </div>;
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
