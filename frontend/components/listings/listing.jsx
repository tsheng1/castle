import React from 'react';
import { Route, Link } from 'react-router-dom';
import Footer from '../footer/footer';
import GreetingContainer from '../greeting/greeting_container';
import ListingIndexContainer from './listing_index_container';
import SearchBar from './search_bar';

const Listing = () => (

  <div className="listing-page">
    <header className="header-bar">
      <Link to="/" className="header-link">
        <img src={window.logo_red} className="logo" />
      </Link>
      <SearchBar />
      <GreetingContainer />
    </header>
    <ListingIndexContainer />
    <Footer />
  </div>

);

export default Listing;