import {RECEIVE_LISTINGS, RECEIVE_LISTING} from "../actions/listing_actions";
import {merge} from 'lodash';

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTINGS:
      // const listings = Object.assign({}, action.listings)
      // Object.keys(listings).forEach(key => listings[key] === undefined && delete listings[key]);
      // return Object.assign({}, state, action.listings);
      return action.listings
    case RECEIVE_LISTING:
      const newState = {[action.listing.id]: action.listing};
      return merge({}, state, newState)
    default:
      return state;
  }
}

export default listingsReducer;