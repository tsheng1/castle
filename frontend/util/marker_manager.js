

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings) {
    const listingsObj = {};
    listings.forEach(listing => listingsObj[listing.id] = listing);

    listings.filter(listing => !this.markers[listing.id]).forEach(listing => this.createMarkerFromListing(listing))

    Object.keys(this.markers).filter(listingId => !listingsObj[listingId]).forEach((listingId) => this.removeMarker(this.markers[listingId]))
  }

  // updateMarkers(listings) {
  //   debugger

  //   let filteredListings = listings.filter(listing => !this.markers[listing.id])
  //   debugger
  //   filteredListings.forEach(listing => this.createMarkerFromListing(listing));
  // }

  createMarkerFromListing(listing) {
    const pos = new google.maps.LatLng(listing.lat, listing.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      listingId: listing.id,
    });

    this.markers[marker.listingId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }
}