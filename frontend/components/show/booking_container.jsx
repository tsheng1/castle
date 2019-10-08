import Booking from './booking';
import moment from 'moment';
import {connect} from 'react-redux';

const msp = (state, ownProps) => {
  let listing = ownProps.listing;
  let bookings = listing.bookings ? listing.bookings : [];
  return {bookings}
}

export default connect(msp)(Booking)