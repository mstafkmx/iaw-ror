class Contact < ActiveRecord::Base

  attr_accessible :name, :mail, :country, :message

  #validates :name, :mail, :country, :message, :presence => true
  #validates :name, :mail, :country, :message, :length =>  { :minimum => 1 }

end
