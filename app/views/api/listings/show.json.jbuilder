
json.partial! 'api/listings/listing', listing: @listing
json.pictures @listing.pictures.map { |pic| pic.url }

json.host do
  json.extract! @listing.host, :id, :first_name, :last_name, :description
end

json.bookings do
  @listing.bookings.each do |booking|
    json.set! booking.id do 
      json.extract! booking, :id, :start_date, :end_date
    end
  end
end

json.booked_dates @listing.booked_dates