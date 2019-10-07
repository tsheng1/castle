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
    const firstPhoto = this.props.listing.photos[0];
    switch (firstPhoto) {
      case "castle11.jpg":
        return <img src={castle11} className="listing-photo" />;
      case "castle21.jpg":
        return <img src={castle21} className="listing-photo" />;
      case "castle31.jpg":
        return <img src={castle31} className="listing-photo" />;
      default:
        return null;
    }
  }

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
      <div className="list-box" onClick={this.handleClick}>
        <li className="list-box-text" >
          <p className="list-location">{this.props.listing.location}</p>
          <p className="list-home-type">{this.props.listing.home_type}</p>
          <p className="list-title">{this.props.listing.title}</p>
          <p className="list-details">{this.props.listing.max_guests} {numGuests} ∙ {this.props.listing.num_bed} {numBed} • { this.props.listing.num_bath } {numBath} </p>
          <div className="list-price-div">
            <p className="list-price">${ this.props.listing.price } </p> <p className="list-price-text">/ night</p>
          </div>
        </li>

        <div className="photo-container">
          {this.getPhoto()}
        </div>
      </div>
    )
  }
}

export default withRouter(ListingIndexItem);