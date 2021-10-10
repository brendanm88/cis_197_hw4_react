import React from 'react'
import Comment from './Comment'

const CommentContainer = ({ depth, commentList }) => {
  const comments = commentList.map((com, i) => (
    // eslint-disable-next-line react/jsx-filename-extension
    <div key={com.name}>
      <Comment d={depth} comment={{ name: com.props.comment.name, body: com.props.comment.body }} />
    </div>
  ))
  return comments
}

export default CommentContainer
