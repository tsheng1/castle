import React from 'react';
import ListingIndexItem from './listing_index_item';
import ListingMap from "../map/listing_map";

class ListingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchListings();
  }

  // componentDidUpdate() {
  //   this.props.fetchListings();
  // }

  render() {
    let listings;

    if (this.props.listings !== undefined && this.props.listings !== 0 ) {
      listings = this.props.listings.map((listing, idx) => {
        return (
          <ListingIndexItem key={idx} listing={listing} />
        )
      })
    }
    

    return (
      <div className="listing-boxes">
        <ul className="listings-list">
          {listings}
        </ul>
      </div>
    )
  }
}

export default ListingIndex;