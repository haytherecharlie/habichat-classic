import React from 'react'
import { pathOr } from 'ramda'
import CommunityPosts from 'ui/components/CommunityPosts'
import useCommunity from 'ui/hooks/useCommunity'
import AppLayout from 'ui/layouts/AppLayout'

const Community = ({ cid }) => {
  console.log(cid)
  const community = useCommunity(cid)
  const displayName = pathOr(undefined, ['displayName'], community)

  return (
    <AppLayout
      loading={!community}
      page="community"
      crawl={false}
      style={{ marginTop: 5 }}
      addButton={typeof community !== 'undefined'}>
      {displayName && <CommunityPosts cid={cid} />}
    </AppLayout>
  )
}

export default Community
