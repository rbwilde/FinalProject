class RemoveDefinitionsFromWords < ActiveRecord::Migration
  def change
    remove_column :words, :definitions, :text
  end
end
