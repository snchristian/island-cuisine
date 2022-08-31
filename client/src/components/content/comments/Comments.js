import React, { useState, useEffect } from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Comment from './Comment'
import CommentForm from './CommentForm'
import { Wrapper } from './CommentStyle'


function Comments({ recipe_id, errors, setErrors }) {
  const [recipeComments, setRecipeComments] = useState([])
  const [activeComment, setActiveComment] = useState(null)

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
        return res.json().then(usercomment => {
          setRecipeComments([...recipeComments, usercomment])
        })

      }
      else {
        res.json().then(errors => setErrors(errors.error))
      }
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

  function handleEditComment(body, commentId) {
    const comment = {
      body: body
    }

    fetch(`/comments/${commentId}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment)
    })
      .then(res => {
        if (res.ok) {
          const updatedComments = recipeComments.map(comment => {
            if (comment.id === commentId) {
              return { ...comment, body: body }
            }
            return comment
          })
          setRecipeComments(updatedComments)
          setActiveComment(null)
        }
      })
  }


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

  function renderComments() {
    if (recipeComments.length > 0) {
      return recipeComments.map(comment => (
        <ol key={comment.id} className=' commentlist'>
          <Comment
            comment={comment}
            handleDeleteComment={handleDeleteComment}
            handleEditComment={handleEditComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
          />
        </ol>
      ))
    }
    else {
      return null
    }
  }

  return (
    <Wrapper>
      <div className='comment-form'>
        <h3>Comments</h3>
        <div> Write Comments</div>
        <CommentForm handleSubmit={addComment} />
        {renderErrors()}
      </div>
      {renderComments()}
    </Wrapper>
  )
}

export default Comments