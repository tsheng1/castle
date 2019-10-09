@listings.each do |listing|
  json.set! listing.id do
    json.partial! 'listing', listing: listing
    json.pictures listing.pictures.map { |pic| pic.url }
    json.host do
      json.extract! listing.host, :id, :first_name, :last_name, :description
    end
  end
end