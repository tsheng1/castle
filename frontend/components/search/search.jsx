import React from 'react';

class Search extends React.Component {



  render() {
    return (
      <div className="search-form">
        <div className="search-container">
          <h2>Book unique places to stay.</h2>
          <p>WHERE</p>
          <input type="text" placeholder="Anywhere" className="splash-input" />
          <div className="checks">
            <p>CHECK-IN</p>
            <p>CHECK-OUT</p>
          </div>
          <input type="text" placeholder="Calendar" className="splash-input" />
          <p>Guests</p>
          <select name="Guests" className="splash-input"></select>
        </div> 
      </div>
    )
  }

}

export default Search;