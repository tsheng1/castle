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
    this.addGuest = this.addGuest.bind(this);
    this.removeGuest = this.removeGuest.bind(this);
    this.validDate = this.validDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleGuest = this.toggleGuest.bind(this);
  }

  openCalendar() {
    this.setState({calShow: true})
  }

  closeCalendar() {
    this.setState({calShow: false})
  }

  removeGuest(event) {
    event.preventDefault();
    if (this.state.guests > 1) {
      let newGuests = this.state.guests - 1
      this.setState({guests: newGuests})
    }
  }
  
  addGuest(event) {
    event.preventDefault();
    debugger
    if (this.state.guests <= this.props.listing.max_guests) {
      let newGuests = this.state.guests + 1;
      this.setState({ guests: newGuests });
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    debugger
    if (this.validDate()) {
      this.props.createBooking({
        user_id: this.props.currentUserId,
        listing_id: this.props.listing.id,
        num_guests: this.state.guests,
        start_date: this.state.startDate.format('YYYY-MM-DD'),
        end_date: this.state.endDate.format('YYYY-MM-DD'),
      }).then(() => this.props.history.replace(`/bookings`));
    } else {
      console.log("not gr8")
    }
  }

  validDate() {
    let tripArr = [];
    let start = this.state.startDate;
    if (this.state.startDate === null) {return false};
    
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

  toggleGuest() {
    let dropdown = document.getElementById("guest-dropdown-content")
    dropdown.classList.toggle("guest-dropdown-show")

    window.onClick = function (e) {
      e.preventDefault();
      if (!e.target.matches(".guest-dropdown-container") && !e.target.matches(".guest-dropdown-content") && !e.target.matches(".buttons")) {
        let dropdowns = document.getElementsByClassName("guest-dropdown-content")[0];
        if (dropdowns.classList.contains('guest-dropdown-show')) {
          dropdowns.classList.remove('guest-dropdown-show');
        }
      }
    }
  }


  
  render() {
    if (this.props.listing.booked_dates === undefined) {
      return null;
    }

    let guest = "guest";
    if (document.getElementById('remove-guest') !== null && this.state.guests > 1) {
      guest = "guests";
      document.getElementById('remove-guest').classList.add("remove-guest-outline")
    } else if (document.getElementById('remove-guest') !== null && this.state.guests === 1) {
      document.getElementById('remove-guest').classList.remove("remove-guest-outline")
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
              <input className="box-check-out-dates" value={endDateString ? endDateString : ""} type="text" placeholder="→    Check-out" onClick={this.openCalendar} readOnly/>
            

            <div className="guest-dropdown-container" >

              <p className="box-text">Guests</p>
                <input readOnly type="number" value={`${this.state.guests}`} placeholder="1 guest" id="guest-dropdown" onClick={this.toggleGuest} />
              <p className="guest-text-box-text">{guest}</p>
            </div>
    
            <button type="submit" className="box-submit">Reserve</button>
            <p className="box-bottom-text">You won't be charged yet</p>
          </form>

        </div>
          <div id="guest-dropdown-content" className="guest-dropdown-content">
            <p>Guests</p>
            <button type="button " id="remove-guest" onClick={this.removeGuest} className="remove-guest-light">-</button>
            <p>{this.state.guests}</p>
            <button type="button " id="add-guest" onClick={this.addGuest}>+</button>
            <p className="max-guest-text">{`${this.props.listing.max_guests} guests maximum. Infants don't count towards number of guests.`}</p>
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

        
      </div>
      </>
    )
  }
}

export default withRouter(Booking);