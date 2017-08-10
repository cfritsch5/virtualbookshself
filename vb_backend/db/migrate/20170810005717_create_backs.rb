class CreateBacks < ActiveRecord::Migration[5.0]
  def change
    create_table :backs do |t|
      t.integer :book_id
      t.string :image_url
      
      t.timestamps
    end
  end
end
