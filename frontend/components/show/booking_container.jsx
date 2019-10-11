import Booking from './booking';
import moment from 'moment';
import {connect} from 'react-redux';
import {createBooking} from '../../actions/booking_actions';

const msp = (state, ownProps) => {
  const listing = ownProps.listing;
  let bookings
  if (listing.bookings) {
    bookings = Object.values(listing.bookings); 
  }
    let currentUserId = state.session.id;
  return {bookings, currentUserId}
}

const mdp = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking))
})

export default connect(msp, mdp)(Booking)