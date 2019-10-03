# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!(email: "demo123@castle.com", first_name: "Castle", last_name: "Demo", password: "password")

# Listing.create!(title: "listing1", description: "Nice apartment", price: "250", location:"Manhattan", lng: -73.975807, lat: 40.758675, num_bed: 2, num_bath: 1, max_guests: 4, home_type: "Apartment")
# Listing.create!(title: "listing2", description: "Okay apartment", price: "150", location:"Manhattan", lng: -74.007688, lat: 40.715847, num_bed: 1, num_bath: 1, max_guests: 2, home_type: "Apartment")
# Listing.create!(title: "listing3", description: "Okay brownstone", price: "200", location:"Manhattan", lng: -73.962620, lat: 40.771419, num_bed: 3, num_bath: 2, max_guests: 5, home_type: "House")