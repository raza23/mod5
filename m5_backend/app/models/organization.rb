class Organization < ApplicationRecord
    has_secure_password

    has_many :oppurtunities
end
