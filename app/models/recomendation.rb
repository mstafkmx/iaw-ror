class Recomendation < ActiveRecord::Base

  attr_accessible :namesender, :mailsender, :namereceiver, :mailreceiver

  #validates :namesender, :mailsender, :namereceiver, :mailreceiver, :presence => true
  #validates :namesender, :mailsender, :namereceiver, :mailreceiver, :length =>  { :minimum => 4 }

end
