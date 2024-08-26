class Character < ApplicationRecord
  validates :name, presence: true

  has_many :locations # char.locations
end
