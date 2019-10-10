import * as BookingApiUtil from '../util/booking_api_util';
import { RECEIVE_SESSION_ERRORS } from './session_actions';

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";

const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
})

const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
})

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId
})

export const fetchBookings = () => dispatch => (
  BookingApiUtil.fetchBookings().then((bookings) => dispatch(receiveBookings(bookings)))
)

export const fetchBooking = id => dispatch => (
  BookingApiUtil.fetchBooking(id).then((booking) => dispatch(receiveBooking(booking)))
)

export const createBooking = booking => dispatch => (
  BookingApiUtil.createBooking(booking).then((booking) => dispatch(receiveBooking(booking)))
)

export const deleteBooking = bookingId => dispatch => (
  BookingApiUtil.deleteBooking(bookingId).then((bookingId) => dispatch(removeBooking(bookingId)))
)