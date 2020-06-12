import React from 'react'
import { Router } from '@reach/router'
import Posts from 'ui/pages/posts'
import Replies from 'ui/pages/replies'

const AppRouter = () => {

  return (
    <Router basepath="/">
      <Posts path="/:cid" />
      <Replies path="/:cid/:pid" />
    </Router>
  )
}

export default AppRouter
