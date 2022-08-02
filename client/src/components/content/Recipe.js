import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Containter, Image, Wrapper} from './RecipeStyle'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Recipe({recipes}) {

    const[recipeSingle,setRecipeSingle]= useState({})
    const { id } = useParams();
    
    useEffect(() => {
        const recipeId = recipes.find(r => r.id.toString() === id);
        setRecipeSingle(recipeId);
      }, [id,recipes])
    
  return (
    
    <Containter>
       <Wrapper>
        <Image ><img src={recipeSingle.image} alt={recipeSingle.name}/></Image>
        <h2>{recipeSingle.name}</h2>
        <p>{recipeSingle.description}</p>
        <div>
        
        </div>
       </Wrapper>
    </Containter>
  )
}

export default Recipe