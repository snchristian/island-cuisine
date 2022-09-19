class Recipe < ApplicationRecord
    has_many :recipe_ingredients
    has_many :ingredients, through: :recipe_ingredients

    has_many :favorite_recipes, dependent: :destroy
    has_many :user, through: :favorite_recipes

    has_many :comments, dependent: :destroy
    has_many :user, through: :comments


end
