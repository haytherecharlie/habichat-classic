import React from 'react'
import PostCard from 'ui/atoms/PostCard'
import ReplyCard from 'ui/atoms/ReplyCard'
import ComposePost from 'ui/components/ComposePost'
import PageLayout from 'ui/layouts/PageLayout'
import useReplies from 'ui/hooks/useReplies'

const Replies = ({ cid, pid }) => {
  const [community, post, replies] = useReplies(cid, pid)

  return (
    <PageLayout loading={!post} page="replies" crawl={false} style={{ marginTop: 5 }}>
      {post && <PostCard key={pid} post={{ ...post, pid, cid }} hideButtons />}
      {replies && Object.entries(replies).map(([key, reply]) => <ReplyCard key={key} reply={reply} />)}
      <ComposePost
        pid={pid}
        cid={cid}
        userID="exmPKxLrWMf0RTQFB4hb"
        displayName="CharlieHay"
        photoURL="https://habi.chat/avatars/beyonce_knowles.jpeg"
      />
    </PageLayout>
  )
}

export default Replies
