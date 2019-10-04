import React from 'react';

class ListingIndexItem extends React.Component {

  render() {
    
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

    return(
      <div className="list-box">
        <li className="list-box-text" >
          <p className="list-location">{this.props.listing.location}</p>
          <p className="list-home-type">{this.props.listing.home_type}</p>
          <p className="list-title">{this.props.listing.title}</p>
          <p className="list-details">{this.props.listing.max_guests} {numGuests} ∙ {this.props.listing.num_bed} {numBed} • { this.props.listing.num_bath } {numBath} </p>
          <div className="list-price-div">
            <p className="list-price">${ this.props.listing.price } </p> <p className="list-price-text">/ night</p>
          </div>
        </li>

        {/* <div>Image here</div> */}
      </div>
    )
  }
}

export default ListingIndexItem;