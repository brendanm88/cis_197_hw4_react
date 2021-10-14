import React, { useState } from 'react'
import { ButtonWrapper } from './StyleComps'

const NewPost = ({
  d,
  update,
  list,
  first,
}) => {
  const [inputName, setName] = useState('')
  const [inputBody, setBody] = useState('')
  const [replying, setReplying] = useState(false)

  const canSubmit = inputName.length > 0 && inputBody.length > 0
  const canReply = d < 4
  if (first) {
    return (
      <div>
        <h2
          style={{
            marginBottom: '-5px',
            marginLeft: '20px',
            fontWeight: '500',
          }}
        >
          New Comment:
        </h2>
        <div
          style={{
            marginLeft: '40px',
          }}
        >
          Username:
          <input
            style={{
              marginRight: '20px',
              marginLeft: '10px',
            }}
            type="text"
            id="name-box"
            value={inputName}
            onChange={e => {
              setName(e.target.value)
            }}
          />
          Message:
          <input
            style={{
              marginRight: '20px',
              marginLeft: '10px',
            }}
            type="text"
            id="message-box"
            value={inputBody}
            onChange={e => {
              setBody(e.target.value)
            }}
          />
          <ButtonWrapper
            style={{
              background: canSubmit ? 'white' : 'steelblue',
              color: canSubmit ? 'steelblue' : 'white',
            }}
            type="submit"
            disabled={!canSubmit}
            onClick={() => {
              const comment = { name: inputName, body: inputBody, depth: d }
              update([...list, comment])
            }}
          >
            Post!
          </ButtonWrapper>
        </div>
      </div>
    )
  }
  if (replying) {
    return (
      <div>
        <h2
          style={{
            marginBottom: '-5px',
            marginLeft: '20px',
            fontWeight: '500',
          }}
        >
          Reply:
        </h2>
        <div
          style={{
            marginLeft: '40px',
          }}
        >
          Username:
          <input
            style={{
              marginRight: '20px',
              marginLeft: '10px',
            }}
            type="text"
            id="name-box"
            value={inputName}
            onChange={e => {
              setName(e.target.value)
            }}
          />
          Message:
          <input
            style={{
              marginRight: '20px',
              marginLeft: '10px',
            }}
            type="text"
            id="message-box"
            value={inputBody}
            onChange={e => {
              setBody(e.target.value)
            }}
          />
          <ButtonWrapper
            style={{
              background: canSubmit ? 'white' : 'steelblue',
              color: canSubmit ? 'steelblue' : 'white',
            }}
            type="submit"
            disabled={!canSubmit}
            onClick={() => {
              const comment = { name: inputName, body: inputBody, depth: d }
              update([...list, comment])
            }}
          >
            Post!
          </ButtonWrapper>
        </div>
      </div>
    )
  }
  return (
    <ButtonWrapper
      style={{
        background: canReply ? 'white' : 'steelblue',
        color: canReply ? 'steelblue' : 'white',
      }}
      type="button"
      disabled={!canReply}
      onClick={e => {
        e.preventDefault()
        setReplying(true)
      }}
    >
      Reply
    </ButtonWrapper>
  )
}

export default NewPost
