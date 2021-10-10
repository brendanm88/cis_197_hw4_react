import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const NewPost = ({ d, list, update }) => {
  const [inputName, setName] = useState('')
  const [inputBody, setBody] = useState('')
  const [depth, setDepth] = useState(d)
  // const [comList, setComList] = useState([])
  // const [final, setFinal] = useState(false)
  const canSubmit = inputName.length > 0 && inputBody.length > 0 && depth < 4
 // if (!final) {
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
            }}
          />
          <button
            type="submit"
            disabled={!canSubmit}
            onClick={() => {
              const comment = { name: inputName, body: inputBody }
              update(comment)

              console.log(list[0])
              // setFinal(true)
            }}
          >
            Post!
          </button>
        </form>
      </div>
    )
 // }

  // return (
  //   <CommentContainer
  //     depth={depth}
  //     commentList={comList}
  //   />
  // )
}

NewPost.propTypes = {
  d: PropTypes.number.isRequired,
}

export default NewPost
