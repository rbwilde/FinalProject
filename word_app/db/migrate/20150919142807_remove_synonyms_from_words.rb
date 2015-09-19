class RemoveSynonymsFromWords < ActiveRecord::Migration
  def change
    remove_column :words, :synonyms, :string
  end
end
