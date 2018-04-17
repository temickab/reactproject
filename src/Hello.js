import React, {Component} from 'react'
import Post from './Post.js'

// define our Hello component
class Hello extends Component {
  // what should the component render
  render () {
    // Make sure to return some UI
    return (
      <div>
        <h1>Hello {this.props.name}. You are {this.props.age} years old.</h1>
        <Post />
      </div>
    )
  }
}

export default Hello
