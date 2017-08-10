class Book < ApplicationRecord
  validates :title, presence: true
  
  has_many :covers
  has_many :spines
  has_many :backs
end
