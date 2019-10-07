@listings.each do |listing|
  json.set! listing.id do
    json.partial! 'listing', listing: listing
    json.pictures listing.pictures.map { |pic| pic.url }
  end
end