import React from 'react';
import ReactDOM from 'react-dom';

class ShowMap extends React.Component {

  componentDidMount() {


    const map = ReactDOM.findDOMNode(this.refs.map);
    const options = {
      center: { lat: this.props.listing.lat, lng: this.props.listing.lng },
      zoom: 14
    };
    this.map = new google.maps.Map(map, options);

    new google.maps.Marker({
      position: { lat: this.props.listing.lat, lng: this.props.listing.lng },
      map: this.map
    });
  }

  render() {
    return (
      <div className="show-map" id="map" ref="map">
        Map
      </div>
    );
  }
}

export default ShowMap;