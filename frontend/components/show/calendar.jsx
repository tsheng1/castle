import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import moment from 'moment';

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: 'startDate',
    }
  }

  render() {
    return (
      <div>
        <DayPickerRangeController
          startDate={this.state.startDate} 
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
          focusedInput={this.state.focusedInput} 
          onFocusChange={focusedInput => this.setState({ focusedInput })} 
          numberOfMonths={2}
          noBorder={true}
        />
      </div>
    )
  }
}

export default Calendar;