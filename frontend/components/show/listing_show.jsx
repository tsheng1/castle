import React from 'react';
import ShowMap from './show_map';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import SearchBar from '../listings/search_bar';
import Calendar from './calendar';
import BookingContainer from './booking_container';


class ListingShow extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      listing: this.props.listing,
    }
    this.redirectListings = this.redirectListings.bind(this);
    this.onHover = this.onHover.bind(this);
    this.offHover = this.offHover.bind(this);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.listingId)
  }

  onHover(selected) {
    let arr = ["0", "1", "2", "3", "4"];
    delete arr[selected];
    arr.map(el => {
      document.getElementById(el).classList.add("gray-photo")
    })
  }

  offHover(){
    let arr = ["0", "1", "2", "3", "4"];
    arr.map(el => {
      document.getElementById(el).classList.remove("gray-photo")
    })
  }

  // componentDidUpdate() {
  //   this.props.fetchListing(this.props.listing.id)
  // }

  redirectListings() {
    this.props.history.push('/listings')
  }

  render () {
    if (this.props.listing === undefined) {
      return null;
    }

    let hostFirst = this.props.listing.host.first_name || null;
    let hostDesc = this.props.listing.host.description || null;

    let numGuests, numBed, numBath
    numGuests = (this.props.listing.max_guests) > 1 ? "guests" : "guest";
    numBed = (this.props.listing.num_bed) > 1 ? "bedrooms" : "bedroom";
    numBath = (this.props.listing.num_bath) > 1 ? "baths" : "bath";

    const firstPhoto = this.props.listing.pictures[0];
    const photos = this.props.listing.pictures.slice(1) || null ;
    let photoShow = photos.map((photo, idx) => {
      return (<div className="small-photo-ind-container"><img src={photo} key={idx} id={`${idx}`} className="small-show-photos" onMouseEnter={() => this.onHover(idx)} onMouseLeave={this.offHover}/></div>)
    });
    let amens = this.props.listing.amenities;
    let amenShow = amens.map((el, idx) => {
      let key;
      switch (el) {
        case "Wifi":
          key = window.wifi;
          break;
        case "TV":
          key = window.tv;
          break;
        case "Fireplace":
          key = window.fireplace;
          break;
        case "Gym":
          key = window.gym;
          break;
        case "Kitchen":
          key = window.kitchen;
          break;
        case "Air conditioning":
          key = window.ac;
          break;
        default:
          break;
      }
      return (
        <div className="text-plus-icon">
          <img src={key} key={`amenitiy`+idx} className="amen-icon"/> 
          <p className="icon-text">{el}</p>
        </div>
      )
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
          <div className="first-photo-container"><img src={firstPhoto} id='4' className="first-photo" onMouseEnter={() => this.onHover(4)} onMouseLeave={this.offHover} /></div>
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
            <div className="amenities-container">
              <p className="amenities-header">Amenities</p>
              {amenShow}
            </div>
            <div className="show-calendar-container">
              <p className="calendar-title">Availability</p>
              <p className="calendar-text">1 night minimum stay</p>
              <Calendar listing={this.props.listing}/>
            </div>

            <div className="reviews-container">
              <div className="reviews-header">
                <h2>Reviews</h2>
                <div className="review-search-container"><input readOnly type="text" value="Search reviews" className="reviews-search" /></div>
              </div>
              <div className="reviews">

              </div>
            </div>

            <div className="host-container">
              <h2>Hosted by {hostFirst}</h2>
              <p>{hostDesc}</p>
            </div>

            <div className="show-map-container">
              <h2>The neighborhood</h2>
              <ShowMap listing={this.props.listing} />
              <p className="map-text">The map shows this castle's specific location</p>
            </div>

          </div>

          <div className="right-side">
            <BookingContainer listing={this.props.listing}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ListingShow;
