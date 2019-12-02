class RemoveUserOppurtuniyFromLog < ActiveRecord::Migration[6.0]
  def change

    remove_column :logs, :user, :string

    remove_column :logs, :oppurtunity, :string
  end
end
