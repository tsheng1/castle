import React from 'react';
import { withRouter } from 'react-router-dom';

class BookingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getPhoto = this.getPhoto.bind(this);
    this.numToMonth = this.numToMonth.bind(this);
  }

  handleClick() {
    this.props.history.push(`/listings/${this.props.booking.listing_id}`)
  }

  getPhoto() {
    if (this.props.booking.listing.photoUrls !== undefined) {
      const photo = this.props.booking.listing.photoUrls[0];
      return (<img src={photo} className="booking-photo" />)
    }
  }

  numToMonth(num) {
    const months = {
      0 : 'January',
      1 : 'February',
      2 : 'March',
      3 : 'April',
      4 : 'May',
      5 : 'June',
      6 : 'July',
      7 : 'August',
      8 : 'September',
      9 : 'October',
      10 : 'November',
      11 : 'December',
    }

    return (months[num]);
  }

  render() {
    
    const endDate = new Date(this.props.booking.end_date);
    const endDateY = endDate.getUTCFullYear();
    const endDateMNum = endDate.getMonth();
    const endDateM = this.numToMonth(endDateMNum);

    return(
      <div className="booking-index-item">
        {this.getPhoto()}
        <p className="booking-date">{endDateM} {endDateY}</p>
        <p className="booking-location">{this.props.booking.listing.location}</p>
      </div>
    )
  }

}

export default withRouter(BookingIndexItem);