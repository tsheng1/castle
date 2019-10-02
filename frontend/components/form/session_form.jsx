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
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  renderErrors() {
    return (
      this.props.errors.map((error, idx) => {
        return (
            <li key={idx}>{error}</li>
        )
      })
    )
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
        <input type="text" placeholder="First name" onChange={this.update('first_name')} /> <br/>
        <input type="text" placeholder="Last name" onChange={this.update('last_name')} />
      </div>;

    } else {
        otherPath = "signup"
        oppForm = "Sign up"
        text = "Don't have an account?"
        passPlaceholder = "Password"
    }
    
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div onClick={this.props.closeModal} className="closex" >X</div>
          <ul>{this.renderErrors()}</ul>
          <input type="text" onChange={this.update('email')} placeholder="Email address"/> <br/>
          {extraInputs}
          <input type="password" onChange={this.update('password')} placeholder={passPlaceholder} /> <br />
          <input type="submit" value={this.props.formType}/>
          <br/>
          {text} {this.props.buttonForm}
        </form>
      </div>
    )
  }


}

export default SessionForm;