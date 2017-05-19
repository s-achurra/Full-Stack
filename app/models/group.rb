class Group < ActiveRecord::Base

  validates :title, :description, :location, :category, presence: true

  # belongs_to :user

  after_initialize :set_default_image

  def set_default_image
    self.image_url ||= "https://secure.meetupstatic.com/s/img/041003812446967856280/logo/svg/logo--script.svg"
  end

end
