class DropTableSavedWords < ActiveRecord::Migration
  def change
  	drop_table :saved_words
  end
end
