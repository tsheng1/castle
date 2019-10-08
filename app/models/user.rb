class User < ApplicationRecord

  attr_reader :password
  
  validates :email, :first_name, :last_name, :password_digest, :session_token,  presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :birthdate, presence: true, allow_nil: true
  validate :validate_birthdate

  after_initialize :ensure_session_token

  has_many :bookings,
    foreign_key: :user_id,
    class_name: :Booking

  has_many :listings,
    foreign_key: :host_id,
    class_name: :Listing

  def validate_birthdate
    if !self.birthdate || Date.today.ago(18.year) < self.birthdate
      errors.add(:base, "To sign up, you must be 18 or older.")
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      return user
    end
    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end
end
