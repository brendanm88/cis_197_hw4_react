/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import NewPost from './NewPost'

// class Comment extends Component  {
//   constructor(props)  {
//     super(props)
//     this.state =  {
//       replies: 0,
//       deleted: false,
//       votes: 0,
//       depth: 0,
//       name: '',
//       body: '',
//       id: 0
//     }
//   }

// pass depth to comment
// create container for comment, like body
const Comment = ({ d, comment }) => {
  // can use depth as variable now
  const { name, body } = comment
  // comment looks like {name: "", body: ""}

  const [replies, setReplies] = useState(0)
  const [deleted, setDeleted] = useState(false)
  const [id, setId] = useState(0)
  const [depth, setDepth] = useState(d)
  const [votes, setVotes] = useState(0)

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

          return (<NewPost d={depth + 1} />)
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

  // <span onClick={() => setLiked(!liked)} style={{ color }}>
  //   {`👍 ${txt}`}
  // </span>
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
