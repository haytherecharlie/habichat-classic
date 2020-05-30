import React, { useEffect } from 'react'
import pathOr from 'ramda.pathor'
import { useSelector } from 'react-redux'
import { fetchCommunity } from 'api/routes'
import Link from 'ui/atoms/Link'
import ComposePost from 'ui/components/ComposePost'
import PostCard from 'ui/components/PostCard'
import PageLayout from 'ui/layouts/PageLayout'

const Community = ({ cid, navigate }) => {
  const { communities } = useSelector(s => s)

  useEffect(() => {
    fetchCommunity(cid)
  }, [])

  return (
    <PageLayout
      loading={!Object.keys(pathOr({}, [cid, 'posts'], communities)).length}
      page="community"
      crawl={false}
      style={{ marginTop: 5 }}>
      {pathOr(false, [cid, 'posts'], communities) &&
        Object.entries(communities[cid].posts).map(([pid, post]) => (
          <PostCard key={pid} post={{ ...post, pid, cid }} />
        ))}
    </PageLayout>
  )
}

export default Community
