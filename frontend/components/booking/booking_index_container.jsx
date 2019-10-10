import { connect } from 'react-redux';
import {fetchListings} from '../../actions/listing_actions';
import {fetchBookings, deleteBooking} from '../../actions/booking_actions';
import BookingIndex from './booking_index';

const msp = (state, ownProps) => {
  let bookings = Object.values(state.entities.bookings);
  let currentUserId = state.session.id;
  let currentUser = state.entities.users[currentUserId]
  return {
    bookings,
    currentUserId,
    currentUser
  }
}

const mdp = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
  fetchBookings: () => dispatch(fetchBookings()),
  deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
})

export default connect(msp, mdp)(BookingIndex)