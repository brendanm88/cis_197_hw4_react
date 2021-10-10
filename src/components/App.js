import React, { Component, useEffect, useState } from 'react'
import CommentContainer from './CommentContainer'
import NewPost from './NewPost'

const App = () => {
  const [comList, updateComList] = useState([])
  const addComment = comment => {
    updateComList(arr => [...arr, comment])
    // list.push(comment)
  }

  return (
    <div>
      <h1>
        Comment App!
      </h1>
      <NewPost d={0} list={comList} update={addComment} />
      <CommentContainer
        depth={0}
        commentList={comList}
      />
    </div>
  )
}

export default App
