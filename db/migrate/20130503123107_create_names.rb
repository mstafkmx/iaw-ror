class CreateNames < ActiveRecord::Migration
  def change
    create_table :names do |t|
      t.string :name
      t.string :sex
      t.text :meaning

      t.timestamps
    end
  end
end
