import React from 'react'
import PostCard from 'ui/atoms/PostCard'
import usePosts from 'ui/hooks/usePosts'
import * as S from './CommunityPosts.style'

const CommunityPosts = ({ cid }) => {
  const posts = usePosts(cid)

  return posts ? (
    <S.CommunityPosts>
      {Object.entries(posts).map(([pid, post]) => (
        <PostCard key={pid} cid={cid} post={post} pid={pid} />
      ))}
    </S.CommunityPosts>
  ) : null
}

export default CommunityPosts
