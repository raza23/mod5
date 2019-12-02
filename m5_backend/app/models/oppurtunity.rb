class Oppurtunity < ApplicationRecord
    has_many :logs
    has_many :users, through: :logs
    belongs_to :organization
end
