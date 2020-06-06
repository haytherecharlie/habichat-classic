import React from 'react'
import NewPostsPill from 'ui/atoms/NewPostsPill'
import CommunityPosts from 'ui/components/CommunityPosts'
import useCommunity from 'ui/hooks/useCommunity'
import AppLayout from 'ui/layouts/AppLayout'

const Community = ({ cid }) => {
  const community = useCommunity(cid)

  return (
    <AppLayout loading={!community} page="community" crawl={false} style={{ marginTop: 5 }} addButton={true}>
      <NewPostsPill cid={cid} />
      {community && <CommunityPosts cid={cid} />}
    </AppLayout>
  )
}

export default Community
