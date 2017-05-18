class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :title
      t.text :description
      t.string :location
      t.string :category
      t.integer :owner_id

      t.timestamps null: false
    end
    add_index :groups, :owner_id
  end
end
