class FavoriteRecipesController < ApplicationController
    
  def create
        @favortie_recipes =  current_user.FavoriteRecipe.new(favorites_params)

        if @favortie_recipes.save
            render json: @favortie_recipes, status: :created
        else
            render json: @favortie_recipes.errors, status: :unprocessable_entity
        end
    end

    def destroy
    end

    private

    # def set_recipe
    #     @recipe = Recipe.find(params[:id])
    # end

    def favorites_params
        params.require(:favortie_recipes).permit(:recipe_id)
    end
end
