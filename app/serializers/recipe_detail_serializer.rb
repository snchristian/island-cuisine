class RecipeDetailSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :instruction, :cooking_time, :servings, :ingredients, :cuisine, :favorited_recipe
  has_many :recipe_ingredients
  has_many :ingredients

  def favorited_recipe
    if current_user === nil
      return nil
    else
      current_user.favorite_recipes.find_by(recipe_id: object.id)
    end
  end

end

