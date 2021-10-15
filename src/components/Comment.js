import React, { useEffect, useState } from 'react'
import { ButtonWrapper, ComWrapper } from './StyleComps'

const Comment = ({
  d,
  comment,
}) => {
  const { name, body } = comment
  const [replying, setReplying] = useState(false)
  const [depth, setDepth] = useState(d)
  const [votes, setVotes] = useState(0)

  if (replying) {
    return (
      <ComWrapper>
        <h4>
          User:
          {' '}
          {name}
        </h4>
        <p>
          Message:
          {body}
        </p>
        <p>
          Votes:
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
  return (
    <ComWrapper>
      <h4>
        User:
        {' '}
        {name}
      </h4>
      <p>
        Message:
        {body}
      </p>
      <p>
        Votes:
        {votes}
      </p>

      <ButtonWrapper
        style={{
          background: 'white',
          color: 'steelblue',
          border: '2px solid steelblue',
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
          border: '2px solid steelblue',
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
