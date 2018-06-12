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
    setTimeout( () => this.setState({submitedForm: true}),
      1500);
  }
  render() {
    const submited = this.state.submitedForm;
    if (sessionStorage.getItem('autorised')) {
      const data = sessionStorage.getItem('autorised').split(',');
      return (
        <div className="signup-block">
          <h1>Hello {data[0]}</h1>
          <button onClick={this.signOut.bind(this)} className="btn-default"> SignOut </button>
        </div>
      );
    }
    if (submited && this.props.autorisedUser.length) {
      sessionStorage.setItem('autorised', [ this.props.autorisedUser[0].login, this.props.autorisedUser[0].preferences] );
      return (
        <div className="signup-block">
          <h1>Welcome {this.props.autorisedUser[0].login}</h1>
        </div>
      );
    }
    return <div className="signup-block">
      {submited &&
      <div>
        <h2>Incorrect email or password</h2>
      </div>}
      <form action="" className="login-form" onSubmit={this.onSubmitForm.bind(this)}>
        <input type="text" placeholder="login" ref={node => (this.login = node)}/>
        <input type="password" placeholder="password" ref={node => (this.password = node)}/>
        <button className="btn-default">Login</button>
      </form>
    </div>;
  }
  signOut() {
    sessionStorage.setItem('autorised', '');
    this.props.history.goBack();
  }
}

