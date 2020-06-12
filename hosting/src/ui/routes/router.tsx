import React from 'react'
import { Router } from '@reach/router'
import useCommunity from 'ui/hooks/useCommunity'
import AppLayout from 'ui/layouts/AppLayout'
import Posts from 'ui/pages/posts'
import Replies from 'ui/pages/replies'

const AppRouter = ({ cid }) => {
  const [community] = useCommunity(cid)

  return (
    <Router basepath="/">
      <Posts path="/:cid" />
      <Replies path="/:cid/:pid" />
    </Router>
  )
}

export default AppRouter
