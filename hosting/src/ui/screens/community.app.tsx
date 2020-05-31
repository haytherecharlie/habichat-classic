import React, { useEffect } from 'react'
import pathOr from 'ramda.pathor'
import { useSelector } from 'react-redux'
import { fetchCommunity } from 'api/routes'
import PostCard from 'ui/components/PostCard'
import PageLayout from 'ui/layouts/PageLayout'

const Community = ({ cid, navigate }) => {
  const { posts } = useSelector(s => s)

  useEffect(() => {
    fetchCommunity(cid)
  }, [])

  return (
    <PageLayout
      loading={!Object.keys(pathOr({}, [cid], posts)).length}
      page="community"
      crawl={false}
      style={{ marginTop: 5 }}>
      {pathOr(false, [cid], posts) &&
        Object.entries(posts[cid]).map(([pid, post]) => <PostCard key={pid} post={{ ...post, pid, cid }} />)}
    </PageLayout>
  )
}

export default Community
