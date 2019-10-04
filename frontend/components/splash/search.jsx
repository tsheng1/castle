import React from 'react';
import { Redirect } from 'react-router-dom';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    <Redirect to="/listings" />
  }


  render() {
    return (
        <div className="search-form">
          <form className="search-container" onSubmit={this.handleSubmit}>
            <h2>Book unique places to stay.</h2>
            <p>WHERE</p>
            <input type="text" placeholder="Anywhere" className="splash-input-text" />
            <div className="checks">
              <p>CHECK-IN</p>
              <p>CHECK-OUT</p>
            </div>
            <input type="text" placeholder="Calendar" className="splash-input-text" />
            <p>Guests</p>
            <select name="Guests" className="splash-input"></select>
            <input type="submit" value="Search" className="search-button"/>
          </form> 
        </div>
    )
  }

}

export default Search;