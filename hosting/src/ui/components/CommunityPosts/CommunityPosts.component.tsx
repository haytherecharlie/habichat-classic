import React, { useState } from 'react'
import PostCard from 'ui/atoms/PostCard'
import usePosts from 'ui/hooks/usePosts'
import * as S from './CommunityPosts.style'

const CommunityPosts = ({ cid }) => {
  const posts = usePosts(cid)

  return posts ? (
    <S.CommunityPosts>
      {Object.entries(posts).map(([pid, post]) => post && <PostCard key={pid} post={{ ...post, pid }} />)}
    </S.CommunityPosts>
  ) : null
}

export default CommunityPosts
