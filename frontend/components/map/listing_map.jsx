import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
    this.searchParams = new URLSearchParams(`${this.props.history.location.hash}`);
    let lat = parseFloat(this.searchParams.get('lat')) || 40.753647;
    let lng = parseFloat(this.searchParams.get('lng')) || -73.980707;
    this.center = {lat: lat, lng: lng}
    this.state = {
      lat: lat,
      lng: lng,
    }
    debugger
  }

  componentDidMount() {
    const mapOptions = {
      center: this.center,
      zoom: 13,
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.boundListener();
    this.MarkerManager.updateMarkers(this.props.listings)
  }

  componentDidUpdate(prevProps) {
    if (this.props.history.location.hash !== prevProps.location.hash) {
      debugger
      const newLocation = new URLSearchParams(`${this.props.history.location.hash}`);
      const lat = parseFloat(newLocation.get('lat')) || 40.753647;
      const lng = parseFloat(newLocation.get('lng')) || -73.980707;
      this.setState({lat: lat, lng: lng})
      this.center = { lat: lat, lng: lng }
      this.map.setCenter(this.center)
    }
    
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
    debugger
    return (
      <div id='map-container' ref={map => this.mapNode = map} />
    )
  }
}

export default withRouter(ListingMap);