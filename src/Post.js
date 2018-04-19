import React, {Component} from 'react'
import Comment from './Comment.js'

// define our Hello component
class Post extends Component {
    // what should the component render
  render () {
      // Make sure to return some UI
    return (
      <div>
        <h2>Hello how are you?</h2>
        <h3>Comments:</h3>
        <Comment message={this.props.comments} />
      </div>
    )
  }
  }

export default Post
