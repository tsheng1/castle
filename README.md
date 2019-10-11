![alt text](https://github.com/tsheng1/castle/blob/master/app/assets/images/logo_red_copy.png)
# Castle

## [Castle live](https://castle-tsheng.herokuapp.com)
#### Castle is a single page AirBnB clone with a number of features.

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

### Listings Page

The listings page allows users to browse available listings. There is also a map that shows filtered listings, which update when the map location is changed.

### Show Page

The show page for each listing shows additional information about the property, along with a sticky form to make a booking. Users can select their desired dates and number of guests in order to create a reservation.

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
