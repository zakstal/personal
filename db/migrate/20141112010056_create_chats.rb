class CreateChats < ActiveRecord::Migration
  def change
    create_table :chats do |t|
      t.integer :from
      t.integer :to
      t.text :chat

      t.timestamps
    end
  end
end
