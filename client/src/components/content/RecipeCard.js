import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom'

function RecipeCard({ recipe, favoritedRecipe, unfavoriteRecipe }) {

  const navigate = useNavigate()
  

  function favoriteButton() {
    if (recipe.favorited_recipe) {
      return (
        <FavoriteIcon sx={{ color: red[500] }} onClick={() => { unfavoriteRecipe(recipe.id) }} />
      )
    }
    else {
      return (
        <FavoriteBorderIcon onClick={() => { favoritedRecipe(recipe.id) }} />
      )
    }
  }

  return (
    <Card sx={{ maxWidth: 345, height: 360 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {recipe.name.charAt(0)}
          </Avatar>
        }

        action={
          <IconButton aria-label="add to favorites" >
            {favoriteButton()}
          </IconButton>
        }

        title={recipe.name}
        subheader={recipe.cooking_time}
      />

      <CardMedia
        sx={{ cursor: 'pointer' }}
        onClick={() => navigate(`/recipes/${recipe.id}`)}
        component="img"
        height="194"
        image={recipe.image}
        alt={recipe.name}
      />
      <CardContent >
        <Typography variant="body2" color="text.secondary" >
          {recipe.description.split('.', 1)[0]}...
        </Typography>
      </CardContent>
    </Card>
  )
}

export default RecipeCard