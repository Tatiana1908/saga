import React, { Component } from 'react';

export default class LoginForm extends Component {
  state = {
    submitedForm: false,
  };
  onSubmitForm(e) {
    e.preventDefault();
    this.props.signUp({
      login: this.login.value,
      password: this.password.value,
    });
    this.setState({submitedForm: true});
  }
  render() {
    const submited = this.state.submitedForm;

    if (submited && this.props.autorisedUser.length) {
      return (
        <h1>Welcome {this.props.autorisedUser[0].login}</h1>
      );
    } else if (submited) {
      return (
        <div>
          <h1>Wrong email or password </h1>
        </div>
      );
    }
    return (
      <form action="" className="login-form" onSubmit={this.onSubmitForm.bind(this)}>
        <input type="text" placeholder="login" ref={node => (this.login = node)}/>
        <input type="password" placeholder="password" ref={node => (this.password = node)}/>
        <button className="btn-default">Login</button>
      </form>
    );
  }
}

