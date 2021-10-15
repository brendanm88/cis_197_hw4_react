import React, { useState } from 'react'
import CommentContainer from './CommentContainer'
import NewPost from './NewPost'
import { GlobalStyle, Title } from './StyleComps'

const App = () => {
  // global comment list stored here
  const [comList, updateComList] = useState([])
  // render entire app, initially just the NewPost form and a new comment container for the list
  return (
    <div>
      <GlobalStyle>
        <div>
          <Title>
            Comment App!
          </Title>
          <NewPost d={0} list={comList} update={updateComList} first />
          <CommentContainer
            depth={0}
            commentList={comList}
            upd={updateComList}
          />
        </div>
      </GlobalStyle>
    </div>
  )
}

export default App
