import React from 'react';
import { Route, Link } from 'react-router-dom';
import Search from './search';
import Footer from '../footer/footer';
import GreetingContainer from '../greeting/greeting_container';

const Splash = () => (

  <div className="landing">
    <header className="header-bar">
      <Link to="/" className="header-link">
        <img src={window.logo} className="logo" />
      </Link>
      <GreetingContainer />
    </header>
    <Search />
    <Footer />
  </div>

);

export default Splash;