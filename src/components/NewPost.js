import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ButtonWrapper } from './StyleComps'

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
      <h2
        style={{
          marginBottom: '-5px',
          marginLeft: '20px',
          fontWeight: '500',
        }}
      >
        New Comment:
      </h2>
      <form
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
            const comment = { name: inputName, body: inputBody }
            console.log(list)
            update([...list, comment])
            console.log(list)
          }}
        >
          Post!
        </ButtonWrapper>
      </form>
    </div>
  )
}

NewPost.propTypes = {
  d: PropTypes.number.isRequired,
}

export default NewPost
