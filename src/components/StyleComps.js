import s from 'styled-components'

export const GlobalStyle = s.div`
  font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: white;
`
// change margin for reply, upvote, downvote?
export const ButtonWrapper = s.button`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 3px;
  box-shadow: 1px 2px 4px dimgray;
`
export const Title = s.h1`
  background: white;
  border: 10px solid white;
  border-radius: 7px;
  color: steelblue;
  font-size: 3.5em;
  font-weight: 530;
  text-align: center;
  word-wrap: break-word;
  box-shadow: 1px 3px 5px dimgray;
`

export const InputWrapper = s.input`
  color: steelblue;
  font-size: 1em;
  border: 2px solid steelblue;
  border-radius: 5px;
  box-shadow: 1px 2px 3px dimgray;
`

export const ComWrapper = s.div`
  background: white;
  border: 10px solid white;
  border-radius: 7px;
  width: 500px;
  color: steelblue;
  word-wrap: break-word;
  box-shadow: 1px 3px 5px dimgray;
`
