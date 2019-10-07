import React from 'react';
import MapSearch from '../map/map_search';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchListings} from '../../actions/listing_actions';
import {updateBounds} from '../../actions/filter_actions';

const msp = state => {
  return {
    listings: Object.values(state.entities.listings),
  }
}

const mdp = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
  updateBounds: bounds => dispatch(updateBounds(bounds))
})

export default withRouter(connect(msp, mdp)(MapSearch));