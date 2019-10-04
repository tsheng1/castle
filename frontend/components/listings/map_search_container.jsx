import React from 'react';
import MapSearch from '../map/map_search';
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

export default connect(msp, mdp)(MapSearch)