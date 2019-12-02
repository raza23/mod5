class RemoveOrganizationFromOppurtunity < ActiveRecord::Migration[6.0]
  def change

    remove_column :oppurtunities, :organization, :string
  end
end
