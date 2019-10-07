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
      :home_type, presence: true

  has_many :pictures

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end
end
