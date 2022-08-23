import React from 'react'
import CommentForm from './CommentForm'
import { User } from './CommentStyle'
import Avatar from '@mui/material/Avatar';
import { lightBlue } from '@mui/material/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan,faPen } from '@fortawesome/free-solid-svg-icons'

function Comment({comment,currentUser,handleDeleteComment,handleEditComment,activeComment,setActiveComment}) {
  const canEdit = currentUser.username === comment.username
  const canDelete = currentUser.username === comment.username
  const isEditing = activeComment && activeComment.id === comment.id


  return (
    <li>
      <User>
        <div className='avatar'>
          <Avatar sx={{ bgcolor: lightBlue[500] }} aria-label="recipe">
             {comment.username.charAt(0)}
          </Avatar>
        </div>
        <div className='text'>
          <p className='username'>{comment.username}</p>
        <span className='icons'>
           {canEdit && <FontAwesomeIcon className='fontawesomepen' icon={faPen}  onClick={() => setActiveComment({id:comment.id})}/>}
          {canDelete &&<FontAwesomeIcon className='fontawesometrash' icon={faTrashCan}  onClick={() => handleDeleteComment(comment.id)}/>}
        </span>
        </div> 
      </User>
        {!isEditing && <p className='comment-body'>{comment.body}</p>}
        {isEditing && (
          <CommentForm value ="Update" initalComment={comment.body} handleSubmit={(body) => handleEditComment(body,comment.id)}/>
        )}
    </li>
    
      
    
  )
}

export default Comment