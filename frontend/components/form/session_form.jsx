import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birth_month: "",
      birth_day: "",
      birth_year: "",
      errorObj: {},
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.errorClass = this.errorClass.bind(this)
    this.errorExist = this.errorExist.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const bdate = `${this.state.birth_year}-${this.state.birth_month}-${this.state.birth_day}`
    const user = {
      email: this.state.email,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      birthdate: bdate,
    }
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

  errors () {
    this.props.errors.map((error, idx) => {
      return (
        <li key={idx}>{error}</li>
      );
    });
  }

  errorExist(error) {
    if (this.props.errors.includes(error)) {
      return error;
    };
  };

  errorClass(error) {
    if (this.errorExist(error)) {
      return "-error";
    } else {
      return "";
    }
  }


  render() {
    const ageErr = "To sign up, you must be 18 or older.";
    const emailErr = "Email can't be blank";
    const firstErr = "First name can't be blank";
    const lastErr = "Last name can't be blank";
    const passErr = "Password is too short (minimum is 6 characters)";

    let otherPath;
    let oppForm;
    let text;
    let extraInputs;
    let passPlaceholder;
    let dateSel;
    if (this.props.formType === "Sign up") {
      otherPath = "login"
      oppForm = "Log in"
      text = "Already have a Castle account?"
      passPlaceholder = "Create a Password"
      extraInputs = (
      <div>
        <input className={`sign-input${this.errorClass(firstErr)}`} type="text" placeholder="First name" onChange={this.update('first_name')} /> <br/>
        <p className={`error-message${this.errorClass(firstErr)}`}>{this.errorExist(firstErr)}</p>
        <input className={`sign-input${this.errorClass(lastErr)}`} type="text" placeholder="Last name" onChange={this.update('last_name')} />
        <p className={`error-message${this.errorClass(firstErr)}`}>{this.errorExist(lastErr)}</p>
      </div>);

      dateSel = (
        <div>
          <p className="birthday">Birthday</p>
          <p className="birthday-text">To sign up, you need to be at least 18. Other people who use Castle won't see your birthday.</p>
          <p className={`error-message${this.errorClass(ageErr)}`}>{this.errorExist(ageErr)}</p>
          <div className="birthdate-selector">
            <select onChange={this.update('birth_month')} id="month-selector" className={`date-select${this.errorClass(ageErr)}`} defaultValue="">
              <option disabled value="">Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select onChange={this.update('birth_day')} id="day-selector" className={`date-select${this.errorClass(ageErr)}`} defaultValue="">
              <option disabled value="">Day</option>
              {days}
            </select>
            <select onChange={this.update('birth_year')} id="year-selector" className={`date-select${this.errorClass(ageErr)}`} defaultValue="">
              <option disabled value="">Year</option>
              {years}
            </select>
          </div>
        </div>
      )

    } else {
        otherPath = "signup"
        oppForm = "Sign up"
        text = "Don't have an account?"
        passPlaceholder = "Password"
    }

    const yearsArr = [];
    const daysArr = [];
    for (let i = 2019; i >= 1899; i--) {
      yearsArr.push(i);
    }
    for (let i = 1; i <= 31; i++) {
      daysArr.push(i);
    }
    const years = yearsArr.map(year => {
      return (<option key={year} value={year}>{year}</option>)
    })

    const days = daysArr.map(day => {
      return (<option key={day} value={day}>{day}</option>)
    })

    
    return (
      <div className="login-form-container">
        <form className="sign-form" onSubmit={this.handleSubmit}>
          <div onClick={this.props.closeModal} ><img src={window.closex} className="closex" /></div>
          <input className={`sign-input${this.errorClass(emailErr)}`} type="text" onChange={this.update('email')} placeholder="Email Address"/>
          <p className={`error-message${this.errorClass(emailErr)}`}>{this.errorExist(emailErr)}</p> 
          {extraInputs}
          <input className={`sign-input${this.errorClass(passErr)}`} type="password" onChange={this.update('password')} placeholder={passPlaceholder} /> <br />
          <p className={`error-message${this.errorClass(passErr)}`}>{this.errorExist(passErr)}</p>

          {dateSel}
          
          <button className="sign-demo" onClick={this.handleDemo}>Demo Login</button>
          <input className="sign-submit" type="submit" value={this.props.formType}/>
          <p className="sign-text">{text}</p> &nbsp; {this.props.buttonForm}
        </form>
      </div>
    )
  }


}

export default SessionForm;