import React from 'react'
import Comment from './Comment'

const CommentContainer = ({ depth, commentList }) => {
  console.log(commentList[0].name)
  const comments = commentList.map((com, i) => (
    <div key={com + com.id}>
      <Comment d={depth} comment={{ name: com.name, body: com.body }} />
    </div>
  ))
  return comments
}

export default CommentContainer
