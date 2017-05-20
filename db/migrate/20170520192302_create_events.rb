class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :host_id
      t.integer :group_id
      t.string :title
      t.text :description
      t.string :location
      t.date :date
      t.time :start_time
      t.time :end_time
      t.string :image_link

      t.timestamps null: false
    end
    add_index :events, :host_id
    add_index :events, :group_id
  end
end
