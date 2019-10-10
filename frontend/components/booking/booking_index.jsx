import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import SearchBar from '../listings/search_bar';
import { Route, Link, withRouter } from 'react-router-dom';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.fetchUserFutureBookings = this.fetchUserFutureBookings.bind(this);
    this.fetchUserPrevBookings = this.fetchUserPrevBookings.bind(this);
  }

  componentDidMount() {
    this.props.fetchListings();
    this.props.fetchBookings();
  }

  fetchUserPrevBookings() {
    const bookings = this.props.bookings;
    const userPrevBookings = bookings.map((booking, idx) => {
      const bookingDate = new Date(booking.end_date)
      if (booking.user_id === this.props.currentUserId && bookingDate < new Date()) {
        return (<BookingIndexItem key={idx} booking={booking}/>)
      }
    })

    return userPrevBookings;
  }

  fetchUserFutureBookings() {
    const bookings = this.props.bookings;
    const userFutureBookings = bookings.map((booking, idx) => {
      const bookingDate = new Date(booking.end_date)
      if (booking.user_id === this.props.currentUserId && bookingDate > new Date()) {
        return (<BookingIndexItem key={idx} booking={booking} />)
      }
    })

    return userFutureBookings;
  }

  render() {
    if (this.props.bookings === undefined) {return null};
    
    const userPrevBookings = this.fetchUserPrevBookings();
    const userFutureBookings = this.fetchUserFutureBookings();
    
    return (
      <div className="bookings-index">
        <header className="header-bar">
          <Link to="/listings" className="header-link" listing={this.props.listing} >
            <img src={window.logo_red} className="logo" />
          </Link>
          <SearchBar />
          <GreetingContainer />
        </header>
        <div className="prev-booking-container">
          {userPrevBookings}
        </div>

        <div className="future-booking-container">
          {userFutureBookings}
        </div>
      </div>
    )
  }
}

export default withRouter(BookingIndex);