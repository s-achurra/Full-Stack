class Event < ActiveRecord::Base
  validates :title, :description, :location, :date, :start_time, presence: true

  after_initialize :set_default_image

  belongs_to :host,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :User

  has_many :rsvps

  has_many :users,
  through: :rsvps

  def set_default_image
    self.image_url ||= "https://secure.meetupstatic.com/s/img/041003812446967856280/logo/svg/logo--script.svg"
  end
end
