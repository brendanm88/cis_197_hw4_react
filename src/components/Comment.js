import React, { useState } from 'react'
import { ButtonWrapper, ComWrapper } from './StyleComps'

const Comment = ({
  d,
  comment,
}) => {
  // initial states
  const { name, body } = comment
  const [votes, setVotes] = useState(0)

  // rendering comment, name, message, votes, and buttons
  return (
    <ComWrapper>
      <h4>
        User:
        {' '}
        {name}
      </h4>
      <p>
        Message:
        {' '}
        {body}
      </p>
      <p>
        Votes:
        {' '}
        {votes}
      </p>

      <ButtonWrapper
        style={{
          background: 'white',
          color: 'steelblue',
        }}
        type="button"
        onClick={() => setVotes(votes + 1)}
      >
        UpVote
      </ButtonWrapper>
      <ButtonWrapper
        style={{
          background: 'white',
          color: 'steelblue',
        }}
        type="button"
        onClick={() => setVotes(votes - 1)}
      >
        DownVote
      </ButtonWrapper>
    </ComWrapper>
  )
}

export default Comment
