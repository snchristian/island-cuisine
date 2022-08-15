class Recipe < ApplicationRecord
    has_many :recipe_ingredients
    has_many :ingredients, through: :recipe_ingredients
    has_many :favortie_recipes
    has_many :user, through: :favortie_recipes

    # def ingredients
    #     self.recipe_ingredients.map do |ing| 
    #         full = [ing.amount, ing.unit,ing.state,ing.ingredient.name,]
    #     end 
    #   end

end
