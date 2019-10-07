class RemovePhotosColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :photos
  end
end
