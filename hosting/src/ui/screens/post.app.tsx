import React, { useEffect } from 'react'
import pathOr from 'ramda.pathor'
import { useSelector } from 'react-redux'
// import { fetchPostAndReplies, streamPost } from 'api/routes'
// import Compose from 'ui/components/ComposePost'
// // import PostCard from 'ui/components/PostCard'
// import ReplyCard from 'ui/components/ReplyCard'
import PageLayout from 'ui/layouts/PageLayout'

const Post = ({ pid, cid }) => {
  const post = useSelector(s => pathOr(undefined, [cid, pid], s.posts))
  // const replies = pathOr(false, ['replies'], post)

  useEffect(() => {
    // if (!post || !Object.keys(pathOr({}, ['replies'], post)).length) fetchPostAndReplies(cid, pid)
    // streamPost(cid, pid)
  }, [])

  return (
    <PageLayout loading={!post} page="community" crawl={false} style={{ marginTop: 5 }}>
      {/* {post && <PostCard key={pid} post={{ ...post, pid, cid }} />} */}
      {/* {replies && Object.entries(replies).map(([key, reply]) => <ReplyCard key={key} reply={reply} />)}
      <Compose
        pid={pid}
        cid={cid}
        userID="exmPKxLrWMf0RTQFB4hb"
        displayName="CharlieHay"
        photoURL="https://habi.chat/avatars/beyonce_knowles.jpeg"
      /> */}
    </PageLayout>
  )
}

export default Post
