import CommentForm from './CommentForm'
import { User } from './CommentStyle'
import Avatar from '@mui/material/Avatar';
import { lightBlue } from '@mui/material/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons'

function Comment({ comment, handleDeleteComment, handleEditComment, activeComment, setActiveComment }) {
  // const canEdit = currentUser.username === comment.username
  // const canDelete = currentUser.username === comment.username
  const isEditing = activeComment && activeComment.id === comment.id
  const canModify = comment.can_modify


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
            {canModify && <FontAwesomeIcon className='fontawesomepen' icon={faPen} onClick={() => setActiveComment({ id: comment.id })} />}
            {canModify && <FontAwesomeIcon className='fontawesometrash' icon={faTrashCan} onClick={() => handleDeleteComment(comment.id)} />}
          </span>
        </div>
      </User>
      {!isEditing && <p className='comment-body'>{comment.body}</p>}
      {isEditing && (
        <CommentForm   type='submit' value="Update"  initalComment={comment.body} handleSubmit={(body) => handleEditComment(body, comment.id)} />
      )}
    </li>
  )
}

export default Comment