import {RECEIVE_LISTING} from '../actions/listing_actions';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTING:
      return Object.assign({}, state, action.listing.bookings);
    default:
      return state;
  }
};

export default bookingsReducer;