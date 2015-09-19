class CreateMyWords < ActiveRecord::Migration
  def change
    create_table :my_words do |t|
    	t.integer :user_id
    	t.integer :word_id
    end
  end
end
