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
User.create!(email: "castlehosting@castle.com", first_name: "Castle", last_name: "NYC", password: "password", birthdate: Date.parse("1995-12-12"), description: "Here at Castle we are passionate about providing consumers with incomparable luxurious experiences with rich historical ties. Over the years we have built deep relationships with properties on an international scale in an effort to provide this premium service to our clients. Whether it is a weekend getaway in a bedroom turret, dug into the rocky Scottish moors, or an exclusive staycation with one of our historic urban properties, Castle can offer it all with just a few simple clicks. Come stay in old world charm with all the convenience of modernity.")

Listing.create!(title: "Rare stay in bedroom of Central Park's Belvedere Castle", description: "Belvedere, Italian for 'beautiful view', is the only place in NYC where you can get the highest view of Central Park.  Designed by Calvert Vaux and Frederick Law Olmsted in 1869, this minature castle provdies all the rich furnishings of a traditional castle stay in Scotland with the modern convenience of New York City. Come and see why Belvedere Castle is voted #3 in 2018 Trip Advisor. ", price: "934", location:"Manhattan", lng: -73.972322, lat: 40.772952, num_bed: 1, num_bath: 1, max_guests: 4, home_type: "Private Room", amenities: ["Wifi", "TV", "Fireplace", "Gym"], host_id: User.second.id)
Listing.create!(title: "Bright and airy castle in heart of Hell's Kitchen ", description: "Quiet oasis in the center of the bustling city.This historic Hell's Kitchen property available for the first time, with permission from the Davis family. Grand scale, minimalist modern furnishings, exceptional cleanliness, and soaring ceilngs.", price: "2958", location:"Manhattan", lng: -73.992493, lat: 40.763070, num_bed: 11, num_bath: 5, max_guests: 20, home_type: "East Wing", amenities: ["Wifi", "TV", "Kitchen", "Gym"], host_id: User.second.id)
Listing.create!(title: "Luxurious 1 bedroom in gorgeous, historic tower of castle", description: "Stunning views in a luxurious bedroom that sleeps one to two people in the tower. Beautiful mahoghany furniture restored from original pieces of the bedroom set where the great noble family of Haverford used to reside. Horses and dogs are welcome. Feel at home with the crackling wood fireplace. ", price: "532", location:"Manhattan", lng: -73.967731, lat: 40.755627, num_bed: 1, num_bath: 1, max_guests: 2, home_type: "Entire Tower", amenities: ["Wifi", "TV", "Air conditioning", "Kitchen"], host_id: User.second.id)

Booking.create!(listing_id: Listing.second.id, user_id: User.first.id, start_date: Date.parse("2019-07-31"), end_date: Date.parse("2019-8-02"), num_guests: 2)
Booking.create!(listing_id: Listing.third.id, user_id: User.first.id, start_date: Date.parse("2019-02-20"), end_date: Date.parse("2019-2-25"), num_guests: 2)

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