class AddHostDescription < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :description, :text
  end
end
