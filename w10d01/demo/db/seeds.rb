# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

puts "Starting the seeds!"

puts "Creating the Characters"

20.times do
  Character.create(
    name: Faker::Movies::HarryPotter.character
  )
end

puts "Retrieving the characters"

characters = Character.all

puts "Creating the Locations"

50.times do
  Location.create(
    location: Faker::Movies::HarryPotter.location,
    quote: Faker::Movies::HarryPotter.quote,
    character: characters.sample
  )
end

puts "Done with seeds!"
