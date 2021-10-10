/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import NewPost from './NewPost'


const Comment = ({ d, comment }) => {
  const { name, body } = comment
  // comment looks like {name: "", body: ""}
  const [id, setId] = useState(uuidv4())
  const [replies, setReplies] = useState(0)
  const [replying, setReplying] = useState(false)
  const [depth, setDepth] = useState(d)
  const [votes, setVotes] = useState(0)
  if (!replying) {
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
          Depth:
          {depth}
        </p>
        <p>
          Votes:
          {votes}
        </p>
        <p>
          Replies:
          {replies}
        </p>
        <button
          type="button"
          onClick={() => {
          // add newpost object
          // with depth + 1
          // How to add new newpost?
            setReplies(replies + 1)
            setReplying(true)
            return (
              <div>
                <NewPost d={depth + 1} />
              </div>
            )
          }}
        >
          Reply
        </button>

        <button type="button" onClick={() => setVotes(votes + 1)}>UpVote</button>
        <button
          type="button"
          onClick={() => setVotes(votes - 1)}
        >
          DownVote
        </button>
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
        Depth:
        {depth}
      </p>
      <p>
        Votes:
        {votes}
      </p>
      <p>
        Replies:
        {replies}
      </p>
      <button
        type="button"
        onClick={() => {
        // add newpost object
        // with depth + 1
        // How to add new newpost?
          setReplies(replies + 1)
          setReplying(true)
          return (
            <div>
              <NewPost d={depth + 1} />
            </div>
          )
        }}
      >
        Reply
      </button>

      <button type="button" onClick={() => setVotes(votes + 1)}>UpVote</button>
      <button
        type="button"
        onClick={() => setVotes(votes - 1)}
      >
        DownVote
      </button>
      <NewPost d={depth + 1} />
    </div>
  )
}

Comment.propTypes = {
  d: PropTypes.number.isRequired,
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
}

export default Comment
