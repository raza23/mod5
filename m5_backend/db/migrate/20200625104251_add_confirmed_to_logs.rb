class AddConfirmedToLogs < ActiveRecord::Migration[6.0]
  def change
    add_column :logs, :confirmed, :boolean,:default => 'false'
  end
end
