import React, { useState } from "react";
import { Form } from "./CommentStyle";
function CommentForm({ handleSubmit, initalComment = '' }) {
  const [body, setbody] = useState([initalComment])

  function onSubmit(event) {
    event.preventDefault();
    setbody("")
    handleSubmit(body)
  }

  function handleChange(event) {
    setbody(event.target.value)
  }

  return (
    <Form onSubmit={onSubmit}>
      <textarea
        name='body'
        value={body}
        onChange={handleChange}
      />
      <input className='submit' type='submit' value="Post" />
    </Form>

  )
}

export default CommentForm