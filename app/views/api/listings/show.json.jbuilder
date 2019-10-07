json.listing do
  json.partial! 'api/listings/listing', listing: @listing
  json.photoUrls @listing.photos.map { |file| url_for(file) }
end