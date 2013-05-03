class Name < ActiveRecord::Base
  validates :name, :sex, :meaning, :presence => true
end
