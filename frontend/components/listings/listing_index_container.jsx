import React from 'react';
import ListingIndex from "./listing_index";
import {connect} from 'react-redux';
import {fetchListings} from '../../actions/listing_actions';

const msp = state => {
  return {
    listings: Object.values(state.entities.listings)
  }
}

const mdp = dispatch => ({
  fetchListings: () => dispatch(fetchListings())
})

export default connect(msp, mdp)(ListingIndex)