
  json.partial! 'api/listings/listing', listing: @listing
  json.pictures @listing.pictures.map { |pic| pic.url }
  