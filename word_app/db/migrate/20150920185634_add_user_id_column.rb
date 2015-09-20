class AddUserIdColumn < ActiveRecord::Migration
  def change
   	  add_reference :words, :user, index: true
  end
end
