import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = {
      email: "demo123@castle.com",
      password: "password"
    }

    if (this.props.formType === "Sign up") {
      this.props.login(demoUser).then(this.props.closeModal);
    } else {
      this.props.processForm(demoUser).then(this.props.closeModal);
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  getErrors() {
    // let errorObj; 
    // this.props.errors.map((error, idx) => {
    //   let word = error.split(" ")[0];
    //   errorObj[word] = <li key={idx}>{error}</li>
    // })
    // console.log(errorObj);
  }

  render() {
    let otherPath;
    let oppForm;
    let text;
    let extraInputs;
    let passPlaceholder;
    if (this.props.formType === "Sign up") {
      otherPath = "login"
      oppForm = "Log in"
      text = "Already have a Castle account?"
      passPlaceholder = "Create a Password"
      extraInputs = 
      <div>
        <input className="sign-input" type="text" placeholder="First name" onChange={this.update('first_name')} /> <br/>
        <input className="sign-input" type="text" placeholder="Last name" onChange={this.update('last_name')} />
      </div>;

    } else {
        otherPath = "signup"
        oppForm = "Sign up"
        text = "Don't have an account?"
        passPlaceholder = "Password"
    }
    
    return (
      <div className="login-form-container">
        <form className="sign-form" onSubmit={this.handleSubmit}>
          <div onClick={this.props.closeModal} ><img src={window.closex} className="closex" /></div>
          <ul className="errors">{this.getErrors()}</ul>
          <input className="sign-input" type="text" onChange={this.update('email')} placeholder="Email Address"/> <br/>
          {extraInputs}
          <input className="sign-input" type="password" onChange={this.update('password')} placeholder={passPlaceholder} /> <br />
          <button className="sign-demo" onClick={this.handleDemo}>Demo Login</button>
          <input className="sign-submit" type="submit" value={this.props.formType}/>
          <br/>
          <p className="sign-text">{text}</p> &nbsp; {this.props.buttonForm}
        </form>
      </div>
    )
  }


}

export default SessionForm;