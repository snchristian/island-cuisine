import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RecipeCard from './RecipeCard';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Containter, RecipePage, Title, Wrapper } from './RecipesPageStyle';


function Recipes({ recipes, setRecipes, errors, setErrors }) {

  function favoritedRecipe(recipe_id) {
   
    fetch('/favorite_recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        recipe_id: recipe_id
      })
    })
      .then(res => {
        if (res.ok) {
         return res.json()
        }
        else {
          res.json().then(errors => setErrors(errors.error))
        }
      })
      .then(favoriteRecipe => {

        const updatedRecipes = recipes.map(recipe => {
          if (recipe.id === recipe_id) {

            return {
              ...recipe,
              favorited_recipe: favoriteRecipe
            }

          }
          else {
            return recipe
          }
        })
        setRecipes(updatedRecipes)
      })
  }

  function unfavoriteRecipe(recipe_id) {
    const recipe = recipes.find(recipe => recipe.id === recipe_id)
    fetch(`/favorite_recipes/${recipe.favorited_recipe.id}`, {
      method: "DELETE",
    })
      .then(res => {
        if (res.ok) {
          const updatedRecipes = recipes.map(recipe => {
            if (recipe.id === recipe_id) {
              return {
                ...recipe,
                favorited_recipe: null
              }
            }
            else {
              return recipe
            }
          })
          setRecipes(updatedRecipes)
        }
      })
  }

  const recipe = recipes.map(recipe => (
    <Grid key={recipe.id} item xs={3}>
      <RecipeCard recipe={recipe} favoritedRecipe={favoritedRecipe} unfavoriteRecipe={unfavoriteRecipe} />
    </Grid>
  ))

  function renderErrors() {
  
    if (errors.length > 0) {
      return (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error" onClose={() => setErrors([])}>
            <AlertTitle>Error</AlertTitle>
            <strong>{errors}</strong>
          </Alert>
        </Stack>
      ); 
    }
  }

 

  return (
    <>
      <Containter>
        <Wrapper>
          <Title>Recipes</Title>
        </Wrapper>
      </Containter>
      <RecipePage>
        {renderErrors()}
      <Box style={{ marginTop: "20px" }}>
          <Grid container spacing={2}>
            {recipe}
          </Grid>
        </Box>
       </RecipePage>  
    </>

  )

}

export default Recipes