import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Comment from './Comment'
import NewPost from './NewPost'

const CommentContainer = ({ commentList, upd }) => {
  const comments = commentList.map((com, i) => (
    <div
      key={uuidv4()}
      style={{
        padding: `25px`,
        left: `${50 * com.depth + 40}px`,
        position: 'relative',
      }}
    >
      <Comment
        d={com.depth}
        comment={{ name: com.name, body: com.body }}
        fxn={upd}
        coms={commentList}
      />
      <NewPost d={com.depth + 1} update={upd} list={commentList} first={false} />
    </div>
  ))
  return comments
}

export default CommentContainer
