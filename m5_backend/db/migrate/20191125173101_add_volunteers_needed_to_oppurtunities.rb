class AddVolunteersNeededToOppurtunities < ActiveRecord::Migration[6.0]
  def change
    add_column :oppurtunities, :volunteers_needed, :integer
  end
end
