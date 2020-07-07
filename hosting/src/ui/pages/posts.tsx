import React from 'react'
import PostCard from 'ui/atoms/PostCard'
import Text from 'ui/atoms/Text'
import ComposePost from 'ui/components/ComposePost'
import Neighbours from 'ui/components/Neighbours'
import useCommunity from 'ui/hooks/useCommunity'
import AppLayout from 'ui/layouts/AppLayout'

const Posts = ({ cid }) => {
  const [community, posts] = useCommunity(cid)

  return (
    <AppLayout
      loading={!community}
      page="community"
      crawl={false}
      style={{ marginTop: 5 }}
      addButton={typeof community !== 'undefined'}>
      <Neighbours cid={cid} />
      <Text size="M" text="Community Posts" style={{ marginTop: 5 }} bold unique />
      {posts && Object.entries(posts).map(([pid, post]) => post && <PostCard key={pid} post={{ ...post, pid }} />)}
      <ComposePost cid={cid} />
    </AppLayout>
  )
}

export default Posts
