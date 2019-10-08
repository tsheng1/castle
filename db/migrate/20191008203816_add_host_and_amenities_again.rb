class AddHostAndAmenitiesAgain < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :amenities, :string, array: true, default: []
    add_column :listings, :host_id, :integer
  end
end
