class CreateLogs < ActiveRecord::Migration[6.0]
  def change
    create_table :logs do |t|
      t.string :user
      t.string :oppurtunity
      t.string :clockin
      t.string :clockout

      t.timestamps
    end
  end
end
