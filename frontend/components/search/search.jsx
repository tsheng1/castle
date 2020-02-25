import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      lat: null,
      lng: null
    }
    this.newLocation = this.newLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const input = document.getElementById("search-input");
    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocomplete.addListener('place_changed', this.newLocation);
  }

  newLocation() {
    const loc = this.autocomplete.getPlace();
    this.setState({
      address: loc.formatted_address,
      lat: loc.geometry.location.lat(),
      lng: loc.geometry.location.lng()
    })

    this.handleSubmit();
  }

  handleSubmit(e) {
    const lat = this.state.lat || 40.753647;
    const lng = this.state.lng || -73.980707;
    const hash = `&lat=${lat}&lng=${lng}`;

    
    this.props.history.push({
      pathname: '/listings',
      hash: hash
    })
    this.props.updateListingToggle();
    
  }

  render () {
    return (
      <div>
        <input type="text" onSubmit={this.handleSubmit} placeholder='Try "Manhattan"' className="search-bar" id="search-input" />
      </div>
    )
  }
}

export default withRouter(Search);