class User < ActiveRecord::Base

	validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: :true

  attr_reader :password

	after_initialize :ensure_session_token, :set_default_image
	before_validation :ensure_session_token_uniqueness

	has_many :owned_groups,
	primary_key: :id,
	foreign_key: :owner_id,
	class_name: :Group,
	dependent: :destroy

	has_many :owned_events,
	primary_key: :id,
	foreign_key: :host_id,
	class_name: :Event,
	dependent: :destroy

	has_many :follows, dependent: :destroy

	has_many :rsvps, dependent: :destroy

	has_many :groups,
	through: :follows

	has_many :events,
	through: :rsvps

	def password= password
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials username, password
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is? password
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end

	def set_default_image
		self.image_url ||= "https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png"
	end

end
