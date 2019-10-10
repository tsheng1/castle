@bookings.each do |booking|
  if (booking != nil)
    json.set! booking.id do 
      json.extract! booking, :id, :user_id, :listing_id, :start_date, :end_date, :num_guests
      if (booking.listing)
        json.set! 'listing' do
          json.extract! booking.listing, :id, :title, :description, :price, :location, :lng, :lat, :num_bed, :num_bath, :max_guests, :home_type , :amenities, :host_id
          json.photoUrls booking.listing.pictures.map { |pic| pic.url }
        end
      end
    end
  end
end