import React, {Component} from 'react'
import Post from './Post.js'
import Nav from './Nav.js'
import Searchbar from './Searchbar'
import './main.css'

class Main extends Component {
  // what should the component render
  render () {
    // Make sure to return some UI
    return (
      <div>
        <Searchbar />
        <Nav />
        <h1>Explore {this.props.name}.</h1>
        <Post />
      </div>
    )
  }
}

export default Main
