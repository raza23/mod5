class AddOrganizationToOppurtunities < ActiveRecord::Migration[6.0]
  def change
    add_reference :oppurtunities, :organization, foreign_key: true
  end
end
