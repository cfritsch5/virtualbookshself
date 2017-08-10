class Book < ApplicationRecord
  has_many :covers
  has_many :spines
  has_many :backs 
end
