import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Link } from 'react-router-dom';
import SignupFormContainer from '../components/form/signup_form_container';
import LoginFormContainer from '../components/form/login_form_container';
import {AuthRoute} from '../util/route_util';
import Modal from './modal/modal';
import Search from './splash/search';
import Footer from './footer/footer';
import Listing from './listings/listing';
import Splash from './splash/splash';

const App = () => (
  <div>
    <Modal />
    <Route exact path="/" component={Splash} />
    <Route exact path="/listings" component={Listing} />
  </div>
);

export default App;