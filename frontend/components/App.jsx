import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Link } from 'react-router-dom';
import SignupFormContainer from '../components/form/signup_form_container';
import LoginFormContainer from '../components/form/login_form_container';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    {/* <Modal /> */}
    <header>
      <Link to="/" className="header-link">
        <h1>Castle</h1>
      </Link>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;