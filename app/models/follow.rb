class Follow < ActiveRecord::Base
  validates :user_id, :group_id, presence: true

  belongs_to :group

  belongs_to :user

end
