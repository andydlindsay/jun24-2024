class Todo < ApplicationRecord
  validates :task, presence: true, length: { minimum: 8 }
end
