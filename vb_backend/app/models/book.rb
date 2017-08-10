class Book < ApplicationRecord
  validates :title, presence: true

  has_many :covers
  has_many :spines
  has_many :backs

  has_many :bookshelf_items

  has_many :users,
  through: :bookshelf_items
end
