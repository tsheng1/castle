import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Link } from 'react-router-dom';
import SignupFormContainer from '../components/form/signup_form_container';
import LoginFormContainer from '../components/form/login_form_container';
import {AuthRoute} from '../util/route_util';
import Modal from './modal/modal';
import Search from './search/search'

const App = () => (
  <div className="landing-page">
    <Modal />
    <header className="header-bar">
      <Link to="/" className="header-link">
        <img src={window.logo} className="logo" />
      </Link>
      <GreetingContainer />
    </header>

    <Search />
  </div>
);

export default App;