class Event < ActiveRecord::Base
  validates :title, :description, :location, :date, :start_time, presence: true

  after_initialize :set_default_image, :set_date_time

  belongs_to :host,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :User

  belongs_to :group

  has_many :rsvps

  has_many :users,
  through: :rsvps

  def set_default_image
    self.image_url ||= "https://secure.meetupstatic.com/s/img/041003812446967856280/logo/svg/logo--script.svg"
  end

  def set_date_time
    self.date_time = DateTime.new(
      self.date.year,
      self.date.month,
      self.date.day,
      self.start_time[0..1].to_i,
      self.start_time[3..4].to_i
    )
  end

end
