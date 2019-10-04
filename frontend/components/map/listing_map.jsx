import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

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
    this.MarkerManager = new MarkerManager(this.map);
    this.boundListener();
    this.MarkerManager.updateMarkers(this.props.listings)
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings)
  }

  boundListener() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateBounds(bounds);
    });
  }

  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map} />
    )
  }
}

export default ListingMap;