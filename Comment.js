import React from 'react';
import { Component } from 'react';

class Comment extends Component  {
  constructor(props)  {
    super(props)
    this.state =  {
      replies: 0,
      deleted: false
    }
  }

  addReply() {
    this.setState({
      likes: this.state.replies + 1
    })
    // do more here
  }

  deleteComment() {
    // approach 1
    this.props.parentState.setState({
      comments: this.props.parentState.tweets.filter((x, pos) => { pos != this.props.key })
    })
    
    // approach 2
    // this.props.deleteParent(this.props.id)
    // this.props.store.dispatch({
    //                           type: 'DELETE_TWEET',
    //                           id: this.props.id
    // })
  }


  render() {
    return (
      <div className="comment" style={{ display: this.state.deleted === true ? 'none' : 'block' }}>
        <h3>Author: {this.props.author}</h3>
        <p>Content:  {this.props.content}</p>
        <p>Replies: {this.state.replies}</p>
        <button onClick={this.addReply.bind(this)} id="reply">Reply</button>
        <button onClick={this.deleteComment.bind(this)} id="delete">Delete</button>
      </div>
    )
  }
}

export default Comment;