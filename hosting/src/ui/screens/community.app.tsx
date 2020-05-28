import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Link from 'ui/atoms/Link'
import ComposePost from 'ui/components/ComposePost'
import PostCard from 'ui/components/PostCard'
import PageLayout from 'ui/layouts/PageLayout'

const Community = ({ cid, navigate }) => {
  const { posts, user } = useSelector(s => s)
  const [loading, setLoading] = useState(true)

  return (
    <PageLayout loading={loading} page="community" crawl={false} style={{ marginTop: 5 }}>
      {Object.entries(posts).map(([pid, post]) => (
        <PostCard key={pid} post={{ ...post, pid, cid }} />
      ))}
      {user.authenticated && <ComposePost user={user} />}
      <Link type="button" onClick={() => console.log('hello')}></Link>
    </PageLayout>
  )
}

export default Community
