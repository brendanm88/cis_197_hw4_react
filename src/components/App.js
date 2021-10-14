import React, { useState } from 'react'
import CommentContainer from './CommentContainer'
import NewPost from './NewPost'
import { GlobalStyle, Title } from './StyleComps'

const App = () => {
  const [comList, updateComList] = useState([])

  return (
    <div>
      <GlobalStyle>
        <div>
          <Title>
            Comment App!
            FIX ORDERING OF REPLIES!!!
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
