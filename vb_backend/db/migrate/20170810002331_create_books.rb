class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author_firstname
      t.string :author_lastname
      t.integer :isbn

      t.timestamps
    end
  end
end
