import React, { Component, useEffect, useState } from 'react'
import CommentContainer from './CommentContainer'
import NewPost from './NewPost'
import { GlobalStyle, Title } from './StyleComps'

const App = () => {
  const [comList, updateComList] = useState([])

  return (
    <div>
      <GlobalStyle>
        <div style={{
          backgroundColor: 'steelblue',
          height: '700px',
        }}
        >
          <Title>
            Comment App!
          </Title>
          <NewPost d={0} list={comList} update={updateComList} />
          <CommentContainer
            depth={0}
            commentList={comList}
          />
        </div>
      </GlobalStyle>
    </div>
  )
}

export default App
