export const fetchBookings = () => {
  return $.ajax({
    method: "GET",
    url: "api/bookings",
  })
}

export const fetchBooking = id => {
  return $.ajax({
    method: "GET",
    url: `api/booking/${id}`
  })
}

export const createBooking = booking => {
  return $.ajax({
    method: "POST",
    url: "/api/bookings",
    data: {booking},
  });
}

export const deleteBooking = bookingId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/bookings/${bookingId}`,
  });
}