import React from 'react'
import NewPostsPill from 'ui/atoms/NewPostsPill'
import CommunityPosts from 'ui/components/CommunityPosts'
import useCommunity from 'ui/hooks/useCommunity'
import PageLayout from 'ui/layouts/PageLayout'

const Community = ({ cid }) => {
  const community = useCommunity(cid)

  return (
    <PageLayout loading={!community} page="community" crawl={false} style={{ marginTop: 5 }}>
      <NewPostsPill cid={cid} />
      {community && <CommunityPosts cid={cid} />}
    </PageLayout>
  )
}

export default Community
