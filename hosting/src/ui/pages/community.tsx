import React from 'react'
import PostCard from 'ui/atoms/PostCard'
import ComposePost from 'ui/components/ComposePost'
import useCommunity from 'ui/hooks/useCommunity'
import AppLayout from 'ui/layouts/AppLayout'

const Community = ({ cid }) => {
  const [community, posts] = useCommunity(cid)

  return (
    <AppLayout
      loading={!community}
      page="community"
      crawl={false}
      style={{ marginTop: 5 }}
      addButton={typeof community !== 'undefined'}>
      <ComposePost cid={cid} />
      {posts && Object.entries(posts).map(([pid, post]) => post && <PostCard key={pid} post={{ ...post, pid }} />)}
    </AppLayout>
  )
}

export default Community
