# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

author_one = Author.find_or_create_by(
  full_name: "Dr Seuss",
  email: "dr@seuss.com"
)

author_two = Author.find_or_create_by(
  full_name: "Robert Munsch",
  email: "rob@munsch.ca"
)

Book.find_or_create_by(
  title: 'Hop on Pop',
  # author_id: author_one.id
  author: author_one
)

Book.find_or_create_by(
  title: 'Fox in Socks',
  # author_id: author_one.id
  author: author_one
)

Book.find_or_create_by(
  title: 'Ponytail',
  # author_id: author_one.id
  author: author_two
)
