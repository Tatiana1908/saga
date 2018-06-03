
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddUserBtn extends Component {
  render() {
    return <button className="btn-default add-user-btn" onClick={ this.props.openModal }>Add user</button>;
  }
}

AddUserBtn.propTypes = {
  openModal: PropTypes.func,
};
