import React from 'react';
import { Route, Link } from 'react-router-dom';

const SearchBar = () => (
  <div>
    <input type="text" placeholder='Try "Manhattan"' className="search-bar"/>
  </div>
);

export default SearchBar;