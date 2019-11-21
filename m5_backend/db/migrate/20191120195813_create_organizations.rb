class CreateOrganizations < ActiveRecord::Migration[6.0]
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :password_digest
      t.string :category
      t.string :description
      t.string :site

      t.timestamps
    end
  end
end
