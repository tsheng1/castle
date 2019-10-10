import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { DayPickerRangeController, isInclusivelyAfterDay } from 'react-dates';
import moment from 'moment';

class Search extends React.Component {

  constructor(props) {
    super(props);
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addGuest = this.addGuest.bind(this);
    this.removeGuest = this.removeGuest.bind(this);
    this.toggleGuest = this.toggleGuest.bind(this);
  }

  openCalendar() {
    this.setState({ calShow: true })
  }

  closeCalendar() {
    this.setState({ calShow: false })
  }

  removeGuest(event) {
    event.preventDefault();
    if (this.state.guests > 1) {
      let newGuests = this.state.guests - 1
      this.setState({ guests: newGuests })
    }
  }

  
  addGuest(event) {
    event.preventDefault();
    let newGuests = this.state.guests + 1;
    this.setState({ guests: newGuests });
  }

  toggleGuest() {
    let dropdown = document.getElementById("guest-dropdown-content-splash")
    dropdown.classList.toggle("guest-dropdown-show-splash")

    window.onClick = function (e) {
      e.preventDefault();
      if (!e.target.matches(".guest-dropdown-container-splash") && !e.target.matches(".guest-dropdown-content-splash") && !e.target.matches(".buttons")) {
        let dropdowns = document.getElementsByClassName("guest-dropdown-content-splash")[0];
        if (dropdowns.classList.contains('guest-dropdown-show-splash')) {
          dropdowns.classList.remove('guest-dropdown-show-splash');
        }
      }
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.history.replace(`/listings`)
  }

  render() {

    if (document.getElementById('remove-guest-splash') !== null && this.state.guests > 1) {
      document.getElementById('remove-guest-splash').classList.add("remove-guest-outline-splash")
    } else if (document.getElementById('remove-guest-splash') !== null && this.state.guests === 1) {
      document.getElementById('remove-guest-splash').classList.remove("remove-guest-outline-splash")
    }

    const today = moment();
    return (
        <div className="search-form">
          <form className="search-container" onSubmit={this.handleSubmit}>
            <h2>Book unique places to stay.</h2>
            <p>WHERE</p>
            <input type="text" placeholder="Anywhere" className="splash-input-text" />
            <div className="checks">
              <p>CHECK-IN</p>
              <p>CHECK-OUT</p>
            </div>

            <div className="splash-cal-container">
              <input type="text" placeholder="mm/dd/yyyy" className="splash-input-text-cal" onClick={this.openCalendar}/>
              <input type="text" placeholder="mm/dd/yyyy" className="splash-input-text-cal" onClick={this.openCalendar}/>
            </div>
            
            <p>Guests</p>
            <div className="guest-dropdown-container-splash" >
              <input type="number" className="splash-guest" id="guest-dropdown-splash" onClick={this.toggleGuest} readOnly />
            </div>
            <input type="submit" value="Search" className="search-button"/>
          </form> 

          <div className={this.state.calShow ? "show-cal-splash" : "hide-cal-splash"}>
            <DayPickerRangeController
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              numberOfMonths={2}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={this.state.focusedInput}
              isOutsideRange={day => isInclusivelyAfterDay(today, day)}
              onOutsideClick={this.closeCalendar}
            />
          </div>

          <div id="guest-dropdown-content-splash" className="guest-dropdown-content-splash">
            <p>Guests</p>
            <button type="button " id="remove-guest-splash" onClick={this.removeGuest} className="remove-guest-light-splash">-</button>
            <p>{this.state.guests}</p>
            <button type="button " id="add-guest-splash" onClick={this.addGuest}>+</button>
          </div>
        </div>
    )
  }

}

export default withRouter(Search);