class Booking < ApplicationRecord

  validates :user_id, :listing_id, :start_date, :end_date, :num_guests, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing
    
end
