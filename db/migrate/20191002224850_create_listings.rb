class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :price, null: false
      t.string :location, null: false
      t.float :lng, null: false
      t.float :lat, null: false
      t.integer :num_bed, null: false
      t.integer :num_bath, null: false
      t.integer :max_guests, null: false
      t.string :home_type, null: false

      t.timestamps
    end
  end
end
