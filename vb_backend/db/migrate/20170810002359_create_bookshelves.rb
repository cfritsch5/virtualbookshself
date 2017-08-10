class CreateBookshelves < ActiveRecord::Migration[5.0]
  def change
    create_table :bookshelves do |t|
      t.integer :user_id
      t.integer :book_id
      t.integer :cover_id
      t.integer :spine_id
      t.integer :back_id

      t.timestamps
    end

    add_index :bookshelves, :user_id 
  end
end
