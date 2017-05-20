class ChangeEvnetImageColumnName < ActiveRecord::Migration
  def change
    rename_column :events, :image_link, :image_url
  end
end
