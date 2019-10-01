import React from 'react';
import { Route, Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  render() {
    let otherPath;
    let oppForm;
    let text;
    if (this.props.formType === "Sign up") {
      otherPath = "login"
      oppForm = "Log in"
      text = "Already have a Castle account?"
    } else {
        otherPath = "signup"
        oppForm = "Sign up"
        text = "Don't have an account?"
    }

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.email} onChange={this.update('email')}/> <br/>
          <input type="password" value={this.state.password} onChange={this.update('password')}/> <br />
          <input type="submit" value={this.props.formType}/>
          <br/>
          {text} <Link to={`/${otherPath}`}>{oppForm}</Link>
        </form>
      </div>
    )
  }


}

export default SessionForm;