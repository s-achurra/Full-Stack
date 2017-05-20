class Rsvp < ActiveRecord::Base
  validates :user_id, :event_id, presence: true
end
