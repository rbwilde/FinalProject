class CreateWords < ActiveRecord::Migration
  def change
    create_table :words do |t|
      t.string :word
      t.string :type
      t.text :definitions
      t.string :synonyms
   

      t.timestamps null: false
    end
  end
end
