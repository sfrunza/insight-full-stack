class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.belongs_to :customer, null: false
      t.string :size_of_move, null: false
      t.string :moving_date, null: false
      t.string :from_address, null: false
      t.string :to_address, null: false
      t.string :house_type
      t.integer :crew_size

      t.timestamps null: false
    end
  end
end
