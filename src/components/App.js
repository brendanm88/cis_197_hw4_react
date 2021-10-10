import React, { Component } from 'react'
import NewPost from './NewPost'

const App = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div>
    <h1>
      Comment App!
    </h1>
    <NewPost d={0} />
  </div>
)
export default App

//   addComment = e => {
//     e.preventDefault();
//     let name = this.state.inName;
//     let body = this.state.inBody;
//     this.state.comments.push(<Comment name={this.state.inName} body={this.state.inBody}/>)
//     console.log(this.state.comments[0].name)

//     // comments list
//   }

//   render()  {
//     const { inName, inBody, count } = this.state

//     // make new post container, using commentList, commentContainer, state has commentList
//     // handle adding new comments in new post, submit updates commentList state and re-render 
// using useEffect, isLoading is state that when updated causes new render

//     // replut button in Comment
//     return (
//       // create commentcontainer tag here and pass inputs
//       // reference comment as a tag like <Comment depth=1 comment={name: "", body: ""}/>
//     )}
//   }

// export default App;
