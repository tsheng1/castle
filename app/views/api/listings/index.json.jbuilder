@listings.each do |listing|
  json.set! listing.id do
    json.partial! 'listing', listing: listing
    json.pictures listing.pictures.map { |pic| pic.url }
    json.host do
      json.extract! listing.host, :id, :first_name, :last_name, :description
    end
    json.bookings do
      listing.bookings.each do |booking|
        json.set! booking.id do 
          json.extract! booking, :id, :start_date, :end_date, :num_guests, :user_id, :listing_id
        end
      end
    end
  end
  
end