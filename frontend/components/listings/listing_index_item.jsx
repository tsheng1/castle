import React from 'react';
import { withRouter } from 'react-router-dom';

class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getPhoto = this.getPhoto.bind(this);
  }

  handleClick() {
    this.props.history.push(`/listings/${this.props.listing.id}`)
  }

  getPhoto() {
    if (this.props.listing !== undefined) {
      const firstPhoto = this.props.listing.pictures[0];
      return (<img src={firstPhoto} className="listing-photo" />)
    } else {
      return null;
    }
  }

  render() {

    if (this.props.listing === undefined) {
      return null;
    }
    
    let numGuests, numBed, numBath
    if (this.props.listing) {
      numGuests = (this.props.listing.max_guests) > 1 ? "guests" : "guest";
      numBed = (this.props.listing.num_bed) > 1 ? "bedrooms" : "bedroom";
      numBath = (this.props.listing.num_bath) > 1 ? "baths" : "bath";
    }

    let amens = this.props.listing.amenities;
    let amenShow = amens.map((el, idx) => {
      if (idx === 0) {
        return (<p className="index-amenities">{el}</p> )  
      } else {
        return (<p className="index-amenities">{` ∙ ${el}`}</p>) 
      }
    })

    let item
    if (this.props.listing) {
      item = (
        <li className="list-box-text" key={Math.floor(Math.random() * 10000)}>
          <p className="list-location">{this.props.listing.location}</p>
          <p className="list-home-type">{this.props.listing.home_type}</p>
          <p className="list-title">{this.props.listing.title}</p>
          <p className="list-details">{this.props.listing.max_guests} {numGuests} ∙ {this.props.listing.num_bed} {numBed} • { this.props.listing.num_bath } {numBath} </p>
          <div className="index-amenities-container">
            {amenShow}
          </div>
          <div className="list-price-div">
            <p className="list-price">${`${this.props.listing.price}/night`}</p>
          </div>
        </li>
      )
    } else {
      item = null;
    }


    return(
      <div className="list-box" onClick={this.handleClick}>
        {item}
        <div className="photo-container">
          {this.getPhoto()}
        </div>
      </div>
    )
  }
}

export default withRouter(ListingIndexItem);