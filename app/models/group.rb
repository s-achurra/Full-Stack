class Group < ActiveRecord::Base

  validates :title, :description, :location, :category, presence: true

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :Owner

  has_many :follows

  has_many :users,
  though: :follows

  after_initialize :set_default_image

  def set_default_image
    self.image_url ||= "https://secure.meetupstatic.com/s/img/041003812446967856280/logo/svg/logo--script.svg"
  end

end
