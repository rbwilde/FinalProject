class RemoveTypeFromWords < ActiveRecord::Migration
  def change
    remove_column :words, :type, :string
  end
end
