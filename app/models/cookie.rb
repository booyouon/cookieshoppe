class Cookie < ApplicationRecord
  has_many :reviews, dependent: :destroy
end
