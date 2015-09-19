class RemoveWordsIdFromSavedWords < ActiveRecord::Migration
  def change
    remove_column :saved_words, :words_id, :integer
  end
end
