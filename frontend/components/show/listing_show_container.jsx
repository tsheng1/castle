import { connect } from 'react-redux';

import { fetchListing } from '../../actions/listing_actions';
import ListingShow from './listing_show';

const msp = (state, ownProps) => {
  const listingId = ownProps.match.params.listingId;
  const listing = state.entities.listings[ownProps.match.params.listingId];
  return {
    listingId,
    listing
  };
};

const mdp = dispatch => ({
  fetchListing: id => dispatch(fetchListing(id)),
  fetchListings: () => dispatch(fetchListings())
});

export default connect(msp, mdp)(ListingShow);