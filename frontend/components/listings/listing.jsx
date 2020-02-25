import React from 'react';
import { Route, Link } from 'react-router-dom';
import Footer from '../footer/footer';
import GreetingContainer from '../greeting/greeting_container';
import MapSearchContainer from '../listings/map_search_container';
import Search from '../search/search';

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateToggle: false,
    }

    this.updateListingToggle = this.updateListingToggle.bind(this);
  }

  updateListingToggle() {
    
    if (this.state.updateToggle === true) {
      this.setState({updateToggle: false});
      
    } else {
      this.setState({updateToggle: true});
      
    }

    
  }

  render() {

    
    return (
      <div className="listing-page">
        <header className="header-bar">
          <Link to="/" className="header-link">
            <img src={window.logo_red} className="logo" />
          </Link>
          <Search updateListingToggle={this.updateListingToggle}/>
          <GreetingContainer />
        </header>
        <MapSearchContainer />
      </div>
    )
  }

};

export default Listing;