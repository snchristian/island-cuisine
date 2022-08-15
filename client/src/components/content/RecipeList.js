import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RecipeCard from './RecipeCard';
import { Containter, Title, Wrapper } from './RecipeListStyle';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




function Recipes({recipes}) {

  const recipe = recipes.map(recipe =>(
     
    <Grid key={ recipe.id } item xs={3}>
      <RecipeCard recipes={recipe} />
    </Grid>
    
  ))

  return (
    <>
    <Containter>
      <Wrapper>
        <Title>Recipes</Title>
      </Wrapper>
    </Containter>
     <Box style={{ marginTop: "20px" }}>
      <Grid container spacing={2}>
        { recipe }
      </Grid>
    </Box>
    </>
   
    
  )
  
}

export default Recipes