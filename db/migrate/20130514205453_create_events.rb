class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :headline
      t.string :event_type
      t.string :media
      t.date :date
      t.text :text
      t.timestamps
    end
  end
end
