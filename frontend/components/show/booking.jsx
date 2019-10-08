import React from 'react';
import { DayPickerRangeController } from 'react-dates';
import moment from 'moment';

class Booking extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: 'startDate',
      guests: 1,
    }
    this.openCalendar = this.openCalendar.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
  }

  openCalendar() {
    // e.preventDefault();
    document.getElementById("calendar-dropdown").classList.remove("hide-cal")
    document.getElementById("calendar-dropdown").classList.add("show-cal")
  }

  closeCalendar() {
    document.getElementById("calendar-dropdown").classList.remove("show-cal")
    document.getElementById("calendar-dropdown").classList.add("hide-cal")
  }

  render() {
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
            <input className="box-check-in-dates" value={startDateString} type="text" placeholder="Check-in" onClick={this.openCalendar} readOnly />
            <input className="box-check-out-dates" value={endDateString} type="text" placeholder="→  Check-out" onClick={this.openCalendar} readOnly/>
            <p className="box-text">Guests</p>
            <input type="text" placeholder="1 guest" className="box-dropdown" />
            <input type="submit" value="Reserve" className="box-submit" />
            <p className="box-bottom-text">You won't be charged yet</p>
          </form>
        </div>

        <div id="calendar-dropdown" className="cal">
          <DayPickerRangeController
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            numberOfMonths={1}
            onFocusChange={focusedInput => this.setState({ focusedInput})}
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
            focusedInput={this.state.focusedInput}
            enableOutsideDays={false}
            onOutsideClick={this.closeCalendar}
          />
        </div>
      </div>
      </>
    )
  }
}

export default Booking;