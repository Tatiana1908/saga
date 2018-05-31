import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FilterForm extends Component {
  render() {
    return <form className="filter-form" onSubmit={this.filterRequest.bind(this)}>
      <select ref={node => (this.option = node)}>
        <option value="firstName">First Name</option>
        <option value="lastName">Last Name</option>
        <option value="age">Age</option>
      </select>
      <input type="name" ref={node => (this.searchForm = node)}/>
      <button>OK</button>
    </form>;
  }
  filterRequest(e) {
    e.preventDefault();
    if (typeof this.searchForm.value === 'string') {
      this.inputVal = (this.searchForm.value).toLowerCase();
    } else {
      this.inputVal = this.searchForm.value;
    }

    this.props.getUsersByFilter(
      {option: this.option.value,
        value: this.inputVal,
      });
    this.searchForm.value = '';
  }
}
FilterForm.propTypes = {
  getUsersByFilter: PropTypes.func,
};
