import React from 'react'
import Comment from './Comment'

const CommentContainer = ({ depth, commentList }) => {
  const comments = commentList.map((com, i) => (
    <div
      key={com + com.id}
      style={{
        padding: `25px`,
        left: `${50 * depth}px`,
        position: 'relative',
      }}
    >
      <Comment d={depth} comment={{ name: com.name, body: com.body }} />
    </div>
  ))
  return comments
}

export default CommentContainer
