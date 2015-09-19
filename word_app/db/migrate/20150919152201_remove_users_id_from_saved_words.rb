class RemoveUsersIdFromSavedWords < ActiveRecord::Migration
  def change
    remove_column :saved_words, :users_id, :integer
  end
end
