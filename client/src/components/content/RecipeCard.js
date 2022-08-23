import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { useNavigate} from 'react-router-dom'

function RecipeCard({ recipe }) {

  const navigate = useNavigate()

  return (
    <Card sx={{ maxWidth: 345, height: 405 }} onClick={() => navigate(`/recipes/${recipe.id}`)}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {recipe.name.charAt(0)}
          </Avatar>
        }

        title={recipe.name}
        subheader={recipe.cooking_time}
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.image}
        alt={recipe.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {recipe.description}
        </Typography>
      </CardContent>
    </Card>

  )
}

export default RecipeCard