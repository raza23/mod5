class CreateOppurtunities < ActiveRecord::Migration[6.0]
  def change
    create_table :oppurtunities do |t|
      t.string :description
      t.string :organization
      t.string :date

      t.timestamps
    end
  end
end
