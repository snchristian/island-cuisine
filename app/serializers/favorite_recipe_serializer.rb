class FavoriteRecipeSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :recipe, serializer: RecipeSerializer
end
