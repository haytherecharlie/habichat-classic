import React from 'react'
import { Router, Redirect } from '@reach/router'
import Posts from 'ui/pages/Posts'
import Replies from 'ui/pages/Replies'

const App = () => {
  return (
    <Router basepath="/">
      <Redirect from='/' to='/H4E' noThrow />
      <Posts path="/:cid" />
      <Replies path="/:cid/:pid" />
    </Router>
  )
}

export default App
