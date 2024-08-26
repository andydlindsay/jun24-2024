class Location < ApplicationRecord
  validates :location, presence: true
  validates :quote, presence: true

  belongs_to :character # location.character
end
