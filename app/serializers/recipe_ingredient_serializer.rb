class RecipeIngredientSerializer < ActiveModel::Serializer
  attributes :id, :amount, :unit, :state
  belongs_to :recipe
end
