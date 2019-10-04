import React from 'react';

class Search extends React.Component {



  render() {
    return (
        <div className="search-form">
          <form className="search-container">
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