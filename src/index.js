import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Hello from './Hello'
import registerServiceWorker from './registerServiceWorker'

const post = {
  title: "Temicka's Journey",
  author: 'Micka Brown',
  body: 'This is a post hahhaha fucker. Just joking',
  comments: ['First comment', 'Second comment', 'Third comment']

}

ReactDOM.render(<Hello name={'Temicka'} age={31} />, document.getElementById('root'))
registerServiceWorker()
