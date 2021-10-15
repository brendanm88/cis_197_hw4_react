import React from 'react'
import Comment from './Comment'
import NewPost from './NewPost'

const CommentContainer = ({ commentList, upd }) => {
  // iterate over comment list and render new components if not rendered yet
  const comments = commentList.map((com, i) => (
    <div
      key={com.key}
      style={{
        padding: `25px`,
        left: `${50 * com.depth + 40}px`,
        position: 'relative',
      }}
    >
      <Comment
        d={com.depth}
        comment={{ name: com.name, body: com.body }}
      />
      <NewPost d={com.depth + 1} update={upd} list={commentList} first={false} index={i + 1} />
    </div>
  ))

  // return list of <Comment> elements
  return comments
}

export default CommentContainer
