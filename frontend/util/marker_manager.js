

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

  createMarkerFromListing(listing) {
    const pos = new google.maps.LatLng(listing.lat, listing.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      listingId: listing.id,
      label: {
        fontFamily: "Helvetica Neue",
        fontSize: "14px",
        color: "#484848",
        fontWeight: "700",
        text: ("$" + listing.price.toString())
      },
      icon: {
        url: `${window.marker}`,
        scaledSize: new google.maps.Size(60, 40),
        origin: new google.maps.Point(0, 0),
        labelOrigin: new google.maps.Point(27, 19),
        backgroundColor: "white",
        // labelOrigin: new google.maps.Point(32, 20),
      }
    });

    google.maps.event.addListener(marker, "mouseover", function () {
      const label = this.getLabel();
      label.color = "#008489";
      this.setLabel(label);
    });
    google.maps.event.addListener(marker, "mouseout", function (evt) {
      var label = this.getLabel();
      label.color = "#484848";
      this.setLabel(label);
    });

    this.markers[marker.listingId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }
}