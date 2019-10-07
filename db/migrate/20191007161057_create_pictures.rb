class CreatePictures < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures do |t|
      t.integer "listing_id", null: false
      t.string "url", null: false

      t.timestamps
    end
  end
end
