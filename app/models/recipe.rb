class Recipe < ApplicationRecord
    has_many :recipe_ingredients
    has_many :ingredients, through: :recipe_ingredients

    # def fullorder
    #     self.recipe_ingredients.map do |ing| 
    #         full = [ing.amount, ing.unit,ing.state,ing.ingredient.name,]
    #     end 
    # end

end
