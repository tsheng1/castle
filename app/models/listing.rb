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
end
