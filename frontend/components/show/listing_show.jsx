import React from 'react';
import ShowMap from './show_map';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import SearchBar from '../listings/search_bar';
import Calendar from './calendar';


class ListingShow extends React.Component {
  constructor(props) {
    super(props); 
    this.redirectListings = this.redirectListings.bind(this);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.listingId)
  }

  redirectListings() {
    this.props.history.push('/listings')
  }

  render () {
    let numGuests, numBed, numBath
    if (this.props.listing.max_guests > 1) {
      numGuests = "guests"
    } else {
      numGuests = "guest"
    }
    if (this.props.listing.num_bed > 1) {
      numBed = "bedrooms"
    } else {
      numBed = "bedroom"
    }
    if (this.props.listing.num_bath > 1) {
      numBath = "baths"
    } else {
      numBath = "bath"
    }

    const firstPhoto = this.props.listing.pictures[0];
    const photos = this.props.listing.pictures.slice(1) || null ;
    let photoShow = photos.map((photo, idx) => {
      return (<img src={photo} key={idx} className="small-show-photos"/>)
    })

    return (
      <div className="listing-show">
        <header className="header-bar">
          <Link to="/listings" className="header-link" listing={this.props.listing} >
            <img src={window.logo_red} className="logo" />
          </Link>
          <SearchBar />
          <GreetingContainer />
        </header>
        <div className="photo-container">
          <img src={firstPhoto} className="first-photo"/>
          <div className="all-photos">  
            {photoShow}
          </div>
        </div>
        <div className="show-body">
          <div className="left-side">
            <div className="show-information">
              <p className="show-title">{this.props.listing.title}</p>
              <p className="show-location">{this.props.listing.location}</p>
              <p className="show-home-type">{this.props.listing.home_type}</p>
              <p className="show-guests">{this.props.listing.max_guests} {numGuests}  {this.props.listing.num_bed} {numBed}  {this.props.listing.num_bath} {numBath} </p>
            </div>
            <div className="show-description-container">
              <p className="show-description">{this.props.listing.description}</p>
            </div>
            <div className="show-calendar-container">
              <p className="calendar-title">Availability</p>
              <p className="calendar-text">1 night minimum stay</p>
              <Calendar listing={this.props.listing}/>
            </div>
            <div className="show-map-container">
              <ShowMap listing={this.props.listing} />
              <p className="map-text">The map shows this place's specific location</p>
            </div>
          </div>

          <div className="right-side">
            <form action="">
              <div>
                <p className="box-price">${this.props.listing.price}</p><p className="box-per-night">per night</p>
              </div>

              <p className="box-text">Dates</p>
              <input className="box-check-dates" type="text" placeholder="Check-in        Check-out"/>
              <p className="box-text">Guests</p>
              <input type="text" placeholder="1 guest" className="box-dropdown" />
              <input type="submit" value="Reserve" className="box-submit" />
              <p className="box-bottom-text">You won't be charged yet</p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ListingShow;
