import React from 'react'
import PostCard from 'ui/atoms/PostCard'
import ReplyCard from 'ui/atoms/ReplyCard'
import useReplies from 'ui/hooks/useReplies'
import { AppLayout } from 'ui/layouts/AppLayout/AppLayout.style'

const Replies = ({ cid, pid }) => {
  const [community, post, replies] = useReplies(cid, pid)

  return (
    <AppLayout
      loading={false}
      page="community"
      crawl={false}
      style={{ marginTop: 5 }}
      addButton={typeof community !== 'undefined'}>
      {post && <PostCard key={pid} post={{ ...post, pid, cid }} hideButtons />}
      {replies && Object.entries(replies).map(([key, reply]) => <ReplyCard key={key} reply={reply} />)}
    </AppLayout>
  )
}

export default Replies
