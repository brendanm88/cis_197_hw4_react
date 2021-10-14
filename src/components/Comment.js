import React, { useState } from 'react'
import { ButtonWrapper } from './StyleComps'

const Comment = ({
  d,
  comment,
}) => {
  const { name, body } = comment
  const [replies, setReplies] = useState(0)
  const [replying, setReplying] = useState(false)
  const [depth, setDepth] = useState(d)
  const [votes, setVotes] = useState(0)

  if (replying) {
    return (
      <div>
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
        <p>
          Replies:
          {replies}
        </p>
        <p>
          Depth:
          {depth}
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
      </div>
    )
  }
  return (
    <div>
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
      <p>
        Replies:
        {replies}
      </p>
      <p>
        Depth:
        {depth}
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
    </div>
  )
}

export default Comment
