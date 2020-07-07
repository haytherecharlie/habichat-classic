import React from 'react'
import ComposePost from 'ui/components/ComposePost'
import NeighboursList from 'ui/entities/NeighboursList'
import PostsList from 'ui/entities/PostsList'
import useCommunity from 'ui/hooks/useCommunity'
import AppLayout from 'ui/layouts/AppLayout'

const Posts = ({ cid }) => {
  // const [community, posts] = useCommunity(cid)

  return (
    <AppLayout
      loading={false}
      page="community"
      crawl={false}
      // addButton={typeof community !== 'undefined'}
      >
      <NeighboursList cid={cid} />
      <PostsList />
      {/* <ComposePost cid={cid} /> */}
    </AppLayout>
  )
}

export default Posts
