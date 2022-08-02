import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { useNavigate} from 'react-router-dom'

function RecipeCard({recipes}) {

    const navigate = useNavigate()

  return (
    <Card sx={{ maxWidth: 345, height:405 }} onClick = {() => navigate(`/recipes/${recipes.id}`)}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           {recipes.name.charAt(0)}
          </Avatar>
        }
        
        title={recipes.name}
        subheader={recipes.cooking_time}
      />
      <CardMedia
        component="img"
        height="194"
        image={recipes.image}
        alt={recipes.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {recipes.description}
        </Typography>
      </CardContent>
    </Card>
  
)
}

export default RecipeCard