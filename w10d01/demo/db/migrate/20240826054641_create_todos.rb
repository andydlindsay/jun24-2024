class CreateTodos < ActiveRecord::Migration[7.1]
  def change
    create_table :todos do |t|
      t.string :task
      t.boolean :is_complete, default: false

      t.timestamps
    end
  end
end
