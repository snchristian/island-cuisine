import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RecipeCard from './RecipeCard';
import { Containter } from './FavoritesStyle';
import { RecipePage, Title, Wrapper } from './RecipesPageStyle';


function Favorites() {
  const [favoriteRecipes, setFavoriteRecipe] = useState([])

  useEffect(() => {
    fetch(`/favorite_recipes`)
      .then(res => res.json())
      .then((data) => setFavoriteRecipe(data))

  }, [])

  function unfavoriteRecipe(recipe_id) {
    const favoriteRecipe = favoriteRecipes.map(favorite => favorite.recipe)
    const recipe = favoriteRecipe.find(recipe => recipe.id === recipe_id)
    console.log(recipe)

    fetch(`/favorite_recipes/${recipe.favorited_recipe.id}`, {

      method: "DELETE",
    })
      .then(res => {
        if (res.ok) {
          const updatedRecipes = favoriteRecipes.filter(favoriteRecipe => favoriteRecipe.recipe.id !== recipe_id)
          setFavoriteRecipe(updatedRecipes)
        }
      })
  }


  const favoriteRecipe = favoriteRecipes.map(favorite => favorite.recipe).map(recipe =>
    <Grid key={recipe.id} item xs={3}>
      <RecipeCard recipe={recipe} unfavoriteRecipe={unfavoriteRecipe} />
    </Grid>)

  return (
    <>
      <Containter>
        <Wrapper>
          <Title>Favorites</Title>
        </Wrapper>
      </Containter>
      <RecipePage>
        <Box style={{ marginTop: "20px" }}>
          <Grid container spacing={2}>
           {favoriteRecipes.length< 0 ? <p>Add a Recipe to Favorites</p>:{favoriteRecipe}}
          </Grid>
        </Box>
      </RecipePage>
    </>
  )
}

export default Favorites