class CreateLocations < ActiveRecord::Migration[7.1]
  def change
    create_table :locations do |t|
      t.string :location
      t.string :quote

      # t.integer :character_id
      t.references :character, foreign_key: true

      t.timestamps
    end
  end
end
