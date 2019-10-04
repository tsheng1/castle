import React from 'react';
import ListingMap from './listing_map';
import ListingIndex from '../listings/listing_index'

const MapSearch = ({listings, fetchListings}) => (
  <div className="index-page">
    <div className="filter-buttons">
      <button className="filter-button" >Dates</button>
      <button className="filter-button" >Guests</button>
    </div>

    <div className="list-map">
        <ListingIndex listings={listings} fetchListings={fetchListings} />

      <div className="search-map">
        <ListingMap listings={listings} />
      </div>
    </div>
  </div>
)

export default MapSearch;