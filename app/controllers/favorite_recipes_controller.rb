class FavoriteRecipesController < ApplicationController
    before_action :authentication
    before_action :set_favorite_recipe, only: %i[destroy]

    def index
        @favorite_recipes = current_user.favorite_recipes

        render json: @favorite_recipes
    end
    
  def create
        @favorite_recipes =  current_user.favorite_recipes.new(favorites_params)

        if @favorite_recipes.save
            render json: @favorite_recipes, status: :created
        else
            render json: @favorite_recipes.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @favorite_recipe.destroy
    end

    private
    def set_favorite_recipe
        @favorite_recipe = FavoriteRecipe.find(params[:id]) 
      end


    def favorites_params
        params.permit(:recipe_id)
    end
end
