# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Listing.destroy_all

User.create!(email: "demo123@castle.com", first_name: "Castle", last_name: "Demo", password: "password", birthdate: Date.parse("1995-12-12"))
User.create!(email: "castlehosting@castle.com", first_name: "Castle Hosting", last_name: "NYC", password: "password", birthdate: Date.parse("1995-12-12"), description: "Host description goes here")

Listing.create!(title: "Modern Apartment", description: "Nice apartment", price: "250", location:"Manhattan", lng: -73.975807, lat: 40.758675, num_bed: 2, num_bath: 1, max_guests: 4, home_type: "Entire Apartment", amenities: ["Wifi", "TV", "Fireplace", "Gym"], host_id: User.second.id)
Listing.create!(title: "Unique Studio Apartment", description: "Okay apartment", price: "150", location:"Manhattan", lng: -74.007688, lat: 40.715847, num_bed: 1, num_bath: 1, max_guests: 2, home_type: "Studio", amenities: ["Wifi", "TV", "Kitchen", "Gym"], host_id: User.second.id)
Listing.create!(title: "Large Brownstone", description: "Okay brownstone", price: "200", location:"Manhattan", lng: -73.962620, lat: 40.771419, num_bed: 3, num_bath: 2, max_guests: 5, home_type: "Entire Apartment", amenities: ["Wifi", "TV", "Air conditioning", "Kitchen"], host_id: User.second.id)

Picture.create!(listing_id: Listing.first.id, url: "https://castle-aa-dev.s3.amazonaws.com/TogXpbnYtumkkF4BgCYkHyBf")
Picture.create!(listing_id: Listing.first.id, url: "https://castle-aa-dev.s3.amazonaws.com/tzPARWNnEKmjayQhNjFc8Ycu")
Picture.create!(listing_id: Listing.first.id, url: "https://castle-aa-dev.s3.amazonaws.com/2gkYiiyeH75CPvc5viHBRpyf")
Picture.create!(listing_id: Listing.first.id, url: "https://castle-aa-dev.s3.amazonaws.com/HcS4MTy4zrjrqu6tjVdronHF")
Picture.create!(listing_id: Listing.first.id, url: "https://castle-aa-dev.s3.amazonaws.com/TZXb2BHMmaZzfJFg9GMX6wGU")

Picture.create!(listing_id: Listing.second.id, url: "https://castle-aa-dev.s3.amazonaws.com/JQwfYcPZTkPgqdbcMJA2QMpA")
Picture.create!(listing_id: Listing.second.id, url: "https://castle-aa-dev.s3.amazonaws.com/Qic3FjBmv3rugJjyauoEeanW")
Picture.create!(listing_id: Listing.second.id, url: "https://castle-aa-dev.s3.amazonaws.com/UkzaLhp9AEhG6T9QQ1jmTHhT")
Picture.create!(listing_id: Listing.second.id, url: "https://castle-aa-dev.s3.amazonaws.com/VShQnH8eTj2nYR9omZrR9s4M")
Picture.create!(listing_id: Listing.second.id, url: "https://castle-aa-dev.s3.amazonaws.com/ZVncq7do5dGsvsLMpovcwjsZ")

Picture.create!(listing_id: Listing.third.id, url: "https://castle-aa-dev.s3.amazonaws.com/ov5S5Ho4LyGTWKK5b135z81G")
Picture.create!(listing_id: Listing.third.id, url: "https://castle-aa-dev.s3.amazonaws.com/aSw25jFxbgdJ7CLVmDYLFwHB")
Picture.create!(listing_id: Listing.third.id, url: "https://castle-aa-dev.s3.amazonaws.com/dEkoGVkYrzX168QMJLdCG7XY")
Picture.create!(listing_id: Listing.third.id, url: "https://castle-aa-dev.s3.amazonaws.com/pxwpX72SJVHLrR9vY5vnTwkY")
Picture.create!(listing_id: Listing.third.id, url: "https://castle-aa-dev.s3.amazonaws.com/1tUmaVLfxhkikZnUmoRjZAPc")




# Listing.first.photos.attach(io: File.open("/Users/Tony/Documents/App Academy/castle-pics/castle11.jpg"), filename: "castle11.jpg")
# Listing.first.photos.attach(io: File.open("/Users/Tony/Documents/App Academy/castle-pics/castle12.jpg"), filename: "castle12.jpg")
# Listing.first.photos.attach(io: File.open("/Users/Tony/Documents/App Academy/castle-pics/castle13.jpg"), filename: "castle13.jpg")
# Listing.first.photos.attach(io: File.open("/Users/Tony/Documents/App Academy/castle-pics/castle14.jpg"), filename: "castle14.jpg")
# Listing.first.photos.attach(io: File.open("/Users/Tony/Documents/App Academy/castle-pics/castle15.jpg"), filename: "castle15.jpg")

# Listing.second.photos.attach(io: File.open("/Users/Tony/Documents/App Academy/castle-pics/castle21.jpg"), filename: "castle21.jpg")
# Listing.second.photos.attach(io: File.open("/Users/Tony/Documents/App Academy/castle-pics/castle22.jpg"), filename: "castle22.jpg")
# Listing.second.photos.attach(io: File.open("/Users/Tony/Documents/App Academy/castle-pics/castle23.jpg"), filename: "castle23.jpg")
# Listing.second.photos.attach(io: File.open("/Users/Tony/Documents/App Academy/castle-pics/castle24.jpg"), filename: "castle24.jpg")
# Listing.second.photos.attach(io: File.open("/Users/Tony/Documents/App Academy/castle-pics/castle25.jpg"), filename: "castle25.jpg")

# Listing.third.photos.attach(io: File.open("/Users/Tony/Documents/App Academy/castle-pics/castle31.jpg"), filename: "castle31.jpg")
# Listing.third.photos.attach(io: File.open("/Users/Tony/Documents/App Academy/castle-pics/castle32.jpg"), filename: "castle32.jpg")
# Listing.third.photos.attach(io: File.open("/Users/Tony/Documents/App Academy/castle-pics/castle33.jpg"), filename: "castle33.jpg")
# Listing.third.photos.attach(io: File.open("/Users/Tony/Documents/App Academy/castle-pics/castle34.jpg"), filename: "castle34.jpg")
# Listing.third.photos.attach(io: File.open("/Users/Tony/Documents/App Academy/castle-pics/castle35.jpg"), filename: "castle35.jpg")