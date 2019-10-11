![alt text](https://github.com/tsheng1/castle/blob/master/app/assets/images/logo_red_copy.png)
# Castle

## [Castle live](https://castle-tsheng.herokuapp.com)

Castle is a single page application inspired by AirBnB, where users are able to browse and book listings.

## Technologies

#### Backend

+ Ruby
+ Rails
+ Postgresql
+ AWS

#### Frontend

+ Javscript
+ React
+ Redux

#### Third Party Libraries

+ React Dates
+ Google Maps
+ Moment


## Key Features
### User Authentication

Users are able to sign up, log in, and log out securely. Sign up and log in forms appear as a modal, and have the proper error messages when fields are missing or incorrect.

![](https://github.com/tsheng1/castle/blob/master/app/assets/images/login-gif.gif)

### Listings Page

The listings page allows users to browse available listings. There is also a map that shows filtered listings, which updates when the map location is changed. Markers are created and destroyed based on the map bounds given by the api.

```javascript
updateMarkers(listings) {
  const listingsObj = {};
  listings.forEach(listing => listingsObj[listing.id] = listing);
  listings.filter(listing => !this.markers[listing.id]).forEach(listing => this.createMarkerFromListing(listing))
  Object.keys(this.markers).filter(listingId => !listingsObj[listingId]).forEach((listingId) => this.removeMarker(this.markers[listingId]))
}
```

![](https://github.com/tsheng1/castle/blob/master/app/assets/images/map-gif.gif)

### Show Page

The show page for each listing shows additional information about the property, including pictures and a description. There is also a sticky form where users can select their desired dates and number of guests in order to create a reservation.

![](https://github.com/tsheng1/castle/blob/master/app/assets/images/show-gif.gif)

### Bookings

Using the React Dates and Moment libraries and React/Redux, bookings created by users are passed to the database and stored in order to prevent overlapping reservations.

```javascript
validDate() {
  let startDate = this.state.startDate;
  const bookedDates = this.props.listing.booked_dates;
  while (startDate.isBefore(this.state.endDate)) {
    if (bookedDates.includes(startDate.format('YYYY-MM-DD')) {
      return false;
    }
    startDate = startDate.add(1, 'day')
  };

  return true;
}
```

### Upcoming Features

Upcoming features include

+ Search functionality by location, availability, number of guests, type of home, and price
+ Reviews for listings
+ Messaging between users and listing hosts