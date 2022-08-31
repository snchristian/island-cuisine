class RecipeSerializer < RecipeDetailSerializer
  attributes :id, :name, :image, :description, :cooking_time, :servings, :ingredients
  
  
end
