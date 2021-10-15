import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ButtonWrapper, InputWrapper } from './StyleComps'

const NewPost = ({
  d,
  update,
  list,
  first,
  index,
}) => {
  const [inputName, setName] = useState('')
  const [inputBody, setBody] = useState('')
  const [replying, setReplying] = useState(false)

  const canSubmit = inputName.length > 0 && inputBody.length > 0
  const canReply = d < 3
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
          <InputWrapper
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
          <InputWrapper
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
              const comment = {
                name: inputName,
                body: inputBody,
                depth: d,
                key: uuidv4(),
              }
              update([comment, ...list])
              setReplying(false)
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
          <InputWrapper
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
          <InputWrapper
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
              const comment = {
                name: inputName,
                body: inputBody,
                depth: d,
                key: uuidv4(),
              }
              update([...list.slice(0, index), comment, ...list.slice(index)])
              // update([...list, comment])
              setReplying(false)
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
      onClick={() => {
        setReplying(true)
      }}
    >
      Reply
    </ButtonWrapper>
  )
}

export default NewPost
