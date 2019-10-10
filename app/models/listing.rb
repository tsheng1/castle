class Listing < ApplicationRecord

  validates :title,
      :description,
      :price,
      :location,
      :lng,
      :lat,
      :num_bed,
      :num_bath,
      :max_guests,
      :home_type, 
      :host_id,
      :amenities,
      presence: true

  has_many :pictures

  belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

  has_many :bookings,
    foreign_key: :listing_id,
    class_name: :Booking

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end

  def booked_dates
    arr = []
    self.bookings.each do |booking|
      curr_date = booking.start_date
      end_date = booking.end_date
      while curr_date <= end_date
        arr << curr_date
        curr_date += 1
      end
    end

    arr
  end
end
