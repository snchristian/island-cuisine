class User < ApplicationRecord
    has_secure_password 
    
    has_many :favorite_recipes
    has_many :recipes, through: :favorite_recipes

    has_many :comments
    has_many :recipes, through: :comments

    validates :username, presence: true, uniqueness: true
    validates :email, presence: :true, uniqueness: true
end
