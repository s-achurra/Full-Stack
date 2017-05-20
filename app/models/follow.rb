class Follow < ActiveRecord::Base
  validates :user_id, :group_id, presence: true
end
