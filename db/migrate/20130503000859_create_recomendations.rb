class CreateRecomendations < ActiveRecord::Migration
  def change
    create_table :recomendations do |t|
      t.string :namesender
      t.string :mailsender
      t.string :namereceiver
      t.string :mailreceiver

      t.timestamps
    end
  end
end
