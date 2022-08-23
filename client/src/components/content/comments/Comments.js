import React, { useState, useEffect } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { Wrapper } from './CommentStyle'

function Comments({ recipe_id, currentUser }) {
  const [recipeComments, setRecipeComments] = useState([])
  const [activeComment, setActiveComment] = useState(null)

    console.log(recipe_id)



  useEffect(() => {
   
      fetch(`/recipes/${recipe_id}/comments`)
      .then(res => res.json())
      .then(comments => setRecipeComments(comments))

  }, [recipe_id])

  function addComment(event) {

    const comment = {
      body: event,
      recipe_id: recipe_id
    }

    fetch("/comments", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment)
    }).then(res => {
      if (res.ok) {
        return res.json()
      }
      else {
        res.json().then(errors => Promise.reject(errors))
      }
    }).then(usercomment => {
      setRecipeComments([...recipeComments, usercomment])

    })

  }

  function handleDeleteComment(commentId) {
    if (window.confirm('Are you sure you want to delete this comment')) {
      fetch(`/comments/${commentId}`, {
        method: "DELETE",
      })
        .then(res => {
          if (res.ok) {
            const updatedComments = recipeComments.filter(comment => comment.id !== commentId)
            setRecipeComments(updatedComments)
          }
        })
    }

  }

  function handleEditComment (body,commentId){
    const comment = {
      body: body
    }


    fetch(`/comments/${commentId}`,{
      method: "PATCH", 
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment)
    })
    .then(res => {
      if (res.ok) {
        const updatedComments = recipeComments.map(comment =>{
          if (comment.id === commentId){
            return {...comment, body:body}
          }
          return comment
        })
        setRecipeComments(updatedComments)
        setActiveComment(null)
      }
    })


  }




  const comment = recipeComments.map(comment => (
    <ol className=' commentlist'>
      <Comment
     key={comment.id} 
    comment={comment} 
    currentUser={currentUser} 
    handleDeleteComment={handleDeleteComment}  
    handleEditComment={handleEditComment}
    activeComment ={activeComment}
    setActiveComment={setActiveComment}
    />
    </ol>
    
  ))


  return (
    <Wrapper>
      <div className='comment-form'>
        <h3>Comments</h3>
      <div> Write Comments</div>
      <CommentForm handleSubmit={addComment} />
      </div>
      {comment}
    </Wrapper>
    
  )
}

export default Comments