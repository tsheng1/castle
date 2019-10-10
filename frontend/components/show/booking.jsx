import React from 'react';
import { DayPickerRangeController, isInclusivelyAfterDay } from 'react-dates';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

class Booking extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: 'startDate',
      guests: 1,
      calShow: false,
      guestShow: false,
    }
    this.openCalendar = this.openCalendar.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
    this.guestOpen = this.guestOpen.bind(this);
    this.guestClose = this.guestClose.bind(this);
    this.toggleEventListener = this.toggleEventListener.bind(this);
    this.addGuest = this.addGuest.bind(this);
    this.removeGuest = this.removeGuest.bind(this);
    this.validDate = this.validDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    const addGuest = this.addGuest;
    const removeGuest = this.removeGuest;

    document.getElementById('remove-guest').addEventListener('click', function(e) {e.stopPropagation(); removeGuest();}, true);
    document.getElementById('add-guest').addEventListener('click', function(e) { e.stopPropagation(); addGuest();}, true);
  }

  openCalendar() {
    this.setState({calShow: true})
  }

  closeCalendar() {
    this.setState({calShow: false})
  }

  guestOpen() {
    this.setState({guestShow: true}, () => this.toggleEventListener());
  }

  guestClose() {
    this.setState({guestShow: false}, () => this.toggleEventListener());
  }
  
  toggleEventListener () {
    if (this.state.guestShow) {
      document.addEventListener('click', this.guestClose);
    } else {
      document.removeEventListener('click', this.guestClose);
    };
  };
  
  removeGuest() {
    if (this.state.guests > 1) {
      let newGuests = this.state.guests - 1
      this.setState({guests: newGuests})
    }
  }
  
  addGuest() {
    if (this.state.guests <= this.props.listing.max_guests) {
      let newGuests = this.state.guests + 1;
      this.setState({ guests: newGuests });
    }
  }
  
  handleSubmit() {
    if (this.validDate()) {
      this.props.createBooking({
        user_id: this.props.currentUserId,
        listing_id: this.props.listing.id,
        num_guests: this.state.guests,
        start_date: this.state.startDate.format('YYYY-MM-DD'),
        end_date: this.state.endDate.format('YYYY-MM-DD'),
      })
      this.props.history.replace(`/bookings`);
    } else {
      console.log("not gr8")
    }
  }

  validDate() {
    let tripArr = [];
    let start = this.state.startDate;
    while (start.isBefore(this.state.endDate)) {
      tripArr.push(start.format('YYYY-MM-DD'));
      start = start.add(1, 'day')
    }
    const bookedDates = this.props.listing.booked_dates;
    let val = true;
    tripArr.forEach(date => {
      if (bookedDates.includes(date)) {
        val = false;
      }
    }) 
    return val;
  }

  render() {
    if (this.props.listing.booked_dates === undefined) {
      return null;
    }
    const today = moment();
    const startDateString = this.state.startDate && this.state.startDate.format('MM/DD/YYYY');
    const endDateString = this.state.endDate && this.state.endDate.format('MM/DD/YYYY');
    return (
      <>
      <div className="form-box">
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <p className="box-price">${this.props.listing.price}</p><p className="box-per-night">per night</p>
            </div>

            <p className="box-text">Dates</p>
            <input className="box-check-in-dates" value={startDateString ? startDateString : ""} type="text" placeholder="Check-in" onClick={this.openCalendar} readOnly />
              <input className="box-check-out-dates" value={endDateString ? endDateString : ""} type="text" placeholder="→  Check-out" onClick={this.openCalendar} readOnly/>
            
            <p className="box-text">Guests</p>
            <input readOnly type="number" value={this.state.guests} placeholder="1 guest" onClick={this.guestOpen} id="guest-dropdown" />

            <input type="submit" value="Reserve" className="box-submit" />
            <p className="box-bottom-text">You won't be charged yet</p>
          </form>
        </div>

        <div className={this.state.calShow ? "show-cal" : "hide-cal"}>
          <DayPickerRangeController
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            numberOfMonths={1}
            onFocusChange={focusedInput => this.setState({ focusedInput})}
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
            focusedInput={this.state.focusedInput}
            isOutsideRange={day => isInclusivelyAfterDay(today, day)} 
            onOutsideClick={this.closeCalendar}
            isDayBlocked={day1 => this.props.listing.booked_dates.some(day2 => day1.isSame(day2))}
          />
        </div>

        <div className={this.state.guestShow ? "show-guest" : "hide-guest"}>
          <p>Guests</p>
          <button id="remove-guest">-</button>
          <button id="add-guest">+</button>
        </div>
      </div>
      </>
    )
  }
}

export default withRouter(Booking);