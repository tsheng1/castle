import React from 'react';
import ListingIndexItem from './listing_index_item';

class ListingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    let listings;
    if (this.props.listings !== undefined) {
      listings = this.props.listings.map(listing => {
        return (
          <ListingIndexItem key={listing.id} listing={listing} />
        )
      })
    }

    return (
      <div>
        <div className="filter-buttons">
          <button className="filter-button" >Dates</button>
          <button className="filter-button" >Guests</button>
        </div>
        <div className="list-map">
          <div className="listing-boxes">
            <ul>
              {listings}
            </ul>
          </div>
          <div className="map">
            {/* map */}
          </div>
        </div>
      </div>
    )
  }
}

export default ListingIndex;