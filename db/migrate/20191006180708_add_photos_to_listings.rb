class AddPhotosToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :photos, :string, array: true, default: []
  end
end
