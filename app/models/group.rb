class Group < ActiveRecord::Base

  validates :title, :description, :location, :category, presence: true

  # belongs_to :user

end
