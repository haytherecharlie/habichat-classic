import React, { useEffect } from 'react'
import pathOr from 'ramda.pathor'
import { useSelector } from 'react-redux'
import { fetchPostAndReplies } from 'api/routes'
import PostCard from 'ui/components/PostCard'
import PageLayout from 'ui/layouts/PageLayout'

const Post = ({ pid, cid }) => {
  const post = useSelector(s => pathOr(undefined, [cid, pid], s.posts))
  const replies = pathOr(false, ['replies'], post)

  useEffect(() => {
    if (!post || !Object.keys(pathOr({}, ['replies'], post)).length) fetchPostAndReplies(cid, pid)
  }, [])

  return (
    <PageLayout loading={!post} page="community" crawl={false} style={{ marginTop: 5 }}>
      {post && <PostCard key={pid} post={{ ...post, pid, cid }} />}
      {replies && Object.entries(replies).map(([key, reply]) => <div key={key}>{reply.bodyText}</div>)}
    </PageLayout>
  )
}

export default Post
