import React from 'react'
 
// const App = () => (
//   <h1>Your react app!</h1>
// )
// export default App

import Comment from '/Comment.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.store.subscribe(function () {
      this.setState(this.props.store.getState());
    }.bind(this));
  }

  // old  approach
  //deleteParent(id) {
    //let newTweets = this.state.tweets.filter((x) => { return x.id !== id });
    //this.setState({
      //tweets: newTweets
    //})
  //}

  render()  {
    let commentlist = this.props.store.getState().comments.map( (c, pos) => {
        return (
          <Comment store={this.props.store} 
                 key={pos} 
                 id={c.id} 
                 content={c.content} 
                 author={c.author}/>
        );
      }
    )

    return (
      <div>
        <h1>Total Comments = { this.props.store.getState().comments.length }</h1>
        {commentlist}
      </div>
    )
  }
}

export default App;
