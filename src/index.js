import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const post = {
  title: "Temicka's Journey",
  author: 'Micka Brown',
  body: 'This is a post hahhaha fucker. Just joking',
  comments: ['First', 'Second', 'Third']

}

ReactDOM.render(<App name={'Temicka'} age={31}

/>, document.getElementById('root'))
registerServiceWorker()

// https://git.generalassemb.ly/ga-wdi-lessons/react-intro
// Start where it says, Nested Components 10 minutes
