import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Containter, Icon, Image, Ingredients, Instructions, RecipeContent, RecipePage, Wrapper} from './RecipeStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock,faUserGroup } from '@fortawesome/free-solid-svg-icons'
import Comments from './comments/Comments'
import { CommentContainter } from './comments/CommentStyle'



function Recipe({ recipes, currentUser}) {

  const [recipeSingle, setRecipeSingle] = useState({})
  const { id } = useParams();

  useEffect(() => {
    if (recipes.length > 0) {
      const recipe = recipes.find(r => r.id.toString() === id)
      setRecipeSingle(recipe)
    }

  }, [id, recipes,recipeSingle])

  console.log(id)


  function render(){

     if(recipeSingle.ingredients === undefined){
      
       return null 
     }
     else{
       return fullIngredient(recipeSingle.recipe_ingredients,recipeSingle.ingredients)

     }
  }
  
  
  function fullIngredient (array,array2){
     const ingredients = []
     for(let i =0; i < array.length; i++){
      ingredients.push(
        <p key={array[i].id} className='recipe-ingredients'>{array[i].amount} {array[i].unit} {array2[i].name} {array[i].state}</p>
      )
     }
     return ingredients
  }

  console.log(recipes)
  console.log(recipeSingle.id)

  

  return (
    <Containter>
      <RecipePage>
        <Wrapper>
          <Image src={recipeSingle.image} alt={recipeSingle.name} />
          <div>
            <h2>{recipeSingle.name}</h2>
            <p>{recipeSingle.description}</p>
            <Icon>
              <div>
                <FontAwesomeIcon className='fontawesome' icon={faClock} />
                <h5>cooking time</h5>
                <p>{recipeSingle.cooking_time}.</p>
              </div>
              <div>
                <FontAwesomeIcon className='fontawesome' icon={faUserGroup} />
                <h5>servings</h5>
                <p>{recipeSingle.servings}.</p>
              </div>
            </Icon>
          </div>
        </Wrapper>
        <RecipeContent>
          <Instructions>
            <h4>Instructions</h4>
            <div className='single'>
              <header className='header'>
                <p className='step'>Step 1</p>
                <div className='line'></div>
              </header>
              <p className='instructions'>Combine cornstarch and water in a small bowl. Stir until cornstarch is dissolved then set aside.</p>
            </div>
            <div className='single'>
              <header className='header'>
                <p className='step'>Step 2</p>
                <div className='line'></div>
              </header>
              <p className='instructions'>Combine cornstarch and water in a small bowl. Stir until cornstarch is dissolved then set aside.</p>
            </div>
            <div className='single'>
              <header className='header'>
                <p className='step'>Step 3</p>
                <div className='line'></div>
              </header>
              <p className='instructions'>Combine cornstarch and water in a small bowl. Stir until cornstarch is dissolved then set aside.</p>
            </div>
          </Instructions>
          <Ingredients>
            <h4>Ingredients</h4>
            {render()}
          </Ingredients>
          <CommentContainter>
          <div className='line'></div>
        <Comments  recipe_id ={id} currentUser={currentUser}></Comments>
        </CommentContainter>
        </RecipeContent>        
      </RecipePage>
    </Containter>
  )
}

export default Recipe