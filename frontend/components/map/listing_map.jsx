import React from 'react';
import ReactDOM from 'react-dom';

class ListingMap extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const mapOptions = {
      center: {lat: 40.753647, lng: -73.980707},
      zoom: 13,
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map} />
    )
  }
}

export default ListingMap;