class RemoveSentenceFromWords < ActiveRecord::Migration
  def change
    remove_column :words, :sentence, :string
  end
end
