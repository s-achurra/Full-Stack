class CreateRsvps < ActiveRecord::Migration
  def change
    create_table :rsvps do |t|
      t.integer :user_id
      t.integer :event_id

      t.timestamps null: false
    end
    add_index :rsvps, :user_id
    add_index :rsvps, :event_id
  end
end
