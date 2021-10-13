import s from 'styled-components'

/* export const ButtonWrapper = s.div`
  display: inline-block;
  border-radius: 3px;
  padding: 0rem 0;
  margin: 0.5rem 1rem;
  background: transparent;
  color: white;
  border: 2px solid white;
` */

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
`
export const Title = s.h1`
  font-size: 3.5em;
  font-weight: 530;
  text-align: center;
`
