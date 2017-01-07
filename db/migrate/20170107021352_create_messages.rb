class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.string :to
      t.string :subject
      t.string :message

      t.timestamps
    end
  end
end
