import React from 'react'
import { pathOr } from 'ramda'
import CommunityPosts from 'ui/components/CommunityPosts'
import ComposePost from 'ui/components/ComposePost'
import useCommunity from 'ui/hooks/useCommunity'
import AppLayout from 'ui/layouts/AppLayout'

const Community = ({ cid }) => {
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
      <ComposePost />
    </AppLayout>
  )
}

export default Community
