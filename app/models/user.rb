class User < ApplicationRecord
    has_secure_password 
    has_many :favortie_recipes
    has_many :recipes, through: :favortie_recipes
end
