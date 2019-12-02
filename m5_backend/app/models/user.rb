class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true

    has_many :logs
    has_many :oppurtunities, through: :logs
end
