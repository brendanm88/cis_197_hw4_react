import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import CommentContainer from './CommentContainer'

const NewPost = ({ d, msg }) => {
  const [inputName, setName] = useState('')
  const [inputBody, setBody] = useState('')
  const [depth, setDepth] = useState(d)
  const [comList, setComList] = useState([])
  const [final, setFinal] = useState(false)
  const canSubmit = inputName.length > 0 && inputBody.length > 0 && depth < 4
  if (!final) {
    return (
      <div>
        <h2>New Comment:</h2>
        <form>
          Username:
          <input
            type="text"
            id="name-box"
            value={inputName}
            onChange={e => {
              setName(e.target.value)
            }}
          />
          Message:
          <input
            type="text"
            id="message-box"
            value={inputBody}
            onChange={e => {
              setBody(e.target.value)
              // console.log(inputBody)
            }}
          />
          <button
            type="submit"
            disabled={!canSubmit}
            onClick={() => {
              const comment = { name: inputName, body: inputBody }
              comList.push(comment)
              setFinal(true)
            }}
          >
            Post!
          </button>
        </form>
      </div>
      // reference comment as a tag like <Comment depth=1 comment={name: "", body: ""}/>
    )
  }
  console.log(comList[0])
  return (
    <CommentContainer
      depth={depth}
      commentList={comList}
    />
  )
}

NewPost.propTypes = {
  d: PropTypes.number.isRequired,
}

export default NewPost

// NEEDS TO HAVE COMMENT CONTAINER
// NEED TO DEFINE COMMENTS, and on submit ADD A COMMENT TO THE LIST
