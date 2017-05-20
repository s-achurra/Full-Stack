class CreateHostIds < ActiveRecord::Migration
  def change
    create_table :host_ids do |t|
      t.string :group_id
      t.string :title
      t.string :description
      t.string :location
      t.string :date
      t.string :start_time
      t.string :end_time
      t.string :image_link

      t.timestamps null: false
    end
  end
end
