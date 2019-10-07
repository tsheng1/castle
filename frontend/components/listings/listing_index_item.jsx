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
    debugger
    const firstPhoto = this.props.listing.pictures[0];
    return (<img src={firstPhoto} className="listing-photo" />)
  }

  render() {
    
    let numGuests, numBed, numBath
    numGuests = (this.props.listing.max_guests) > 1 ? "guests" : "guest";
    numBed = (this.props.listing.num_bed) > 1 ? "bedrooms" : "bedroom";
    numBath = (this.props.listing.num_bath) > 1 ? "baths" : "bath";


    // if (this.props.listing.max_guests > 1) {
    //   numGuests = "guests"
    // } else {
    //   numGuests = "guest"
    // }
    // if (this.props.listing.num_bed > 1) {
    //   numBed = "bedrooms"
    // } else {
    //   numBed = "bedroom"
    // }
    // if (this.props.listing.num_bath > 1) {
    //   numBath = "baths"
    // } else {
    //   numBath = "bath"
    // }

    

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
            {/* <div id="carousel" className="carousel-slide" data-ride="carousel">
              <ol class="carousel-indicators" list-type="none">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
              </ol>

              <div className="carousel-inner">
                <div className="item active">
                  <img src={this.props.listing.pictures[0]}  />
                </div>
                <div className="item">
                  <img src={this.props.listing.pictures[1]} />
                </div>
                <div className="item">
                  <img src={this.props.listing.pictures[2]} />
                </div>
                <div className="item">
                  <img src={this.props.listing.pictures[3]} />
                </div>
                <div className="item">
                  <img src={this.props.listing.pictures[4]} />
                </div>

                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div> */}
        </div>
      </div>
    )
  }
}

export default withRouter(ListingIndexItem);