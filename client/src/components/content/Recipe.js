import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Containter, Icon, Image, Ingredients, Instructions, RecipeContent, SingleRecipePage, Wrapper} from './RecipeStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock,faUserGroup,faBowlFood} from '@fortawesome/free-solid-svg-icons'
import Comments from './comments/Comments'
import { CommentContainter } from './comments/CommentStyle'



function Recipe({ recipes, errors, setErrors}) {

  const [recipeSingle, setRecipeSingle] = useState({})
  const { id } = useParams();

  
  useEffect(() => {
    if (recipes.length > 0) {
      const recipe = recipes.find(r => r.id.toString() === id)
      setRecipeSingle(recipe)
    }

  }, [id, recipes,recipeSingle])


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

  function instructions (){
    var step = 0

    if (recipeSingle.instruction === undefined){
      return null
    }
    else{
     return(
      recipeSingle.instruction.map(instruction => (
        <>
        <header className='header'>
        <p className='step'>Step {step += 1}</p>
        <div className='line'></div>
      </header>
      <p className='instructions'>{instruction}</p>
        </>
     )   
      )
    )
    }
    
  }

  return (
    <Containter>
      <SingleRecipePage>
        <Wrapper>
          <Image src={recipeSingle.image} alt={recipeSingle.name} />
          <div>
            <h2>{recipeSingle.name}</h2>
            <p>{recipeSingle.description}</p>
            <Icon>
              <div>
                <FontAwesomeIcon className='fontawesome' icon={faClock} />
                <h5>cooking time</h5>
                <p>{recipeSingle.cooking_time}</p>
              </div>
              <div>
                <FontAwesomeIcon className='fontawesome' icon={faUserGroup} />
                <h5>servings</h5>
                <p>{recipeSingle.servings}</p>
              </div>
              <div>
                <FontAwesomeIcon className='fontawesome' icon={faBowlFood} />
                <h5>cuisine</h5>
                <p>{recipeSingle.cuisine}</p>
              </div>
            </Icon>
          </div>
        </Wrapper>
        <RecipeContent>
          <Instructions>
            <h4>Instructions</h4>
            <div className='single'>
              {instructions()}
            </div>
          </Instructions>
          <Ingredients>
            <h4>Ingredients</h4>
            {render()}
          </Ingredients>
          <CommentContainter>
          <div className='line'></div>
        <Comments  recipe_id ={id} errors={errors} setErrors={setErrors} ></Comments>
        </CommentContainter>
        </RecipeContent>        
      </SingleRecipePage>
    </Containter>
  )
}

export default Recipe