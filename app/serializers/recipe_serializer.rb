class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :cooking_time, :servings, :ingredients
  has_many :recipe_ingredients
  has_many :ingredients

end
