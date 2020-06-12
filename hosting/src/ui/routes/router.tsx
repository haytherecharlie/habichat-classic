import React from 'react'
import { Router } from '@reach/router'
import Locate from 'ui/pages/locate'
import Posts from 'ui/pages/posts'
import Replies from 'ui/pages/replies'

const AppRouter = () => {
  return (
    <Router basepath="/">
      <Locate path="/locate" />
      <Posts path="/:cid" />
      <Replies path="/:cid/:pid" />
    </Router>
  )
}

export default AppRouter
