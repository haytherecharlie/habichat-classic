import React from 'react'
import { useSelector } from 'react-redux'
import Text from 'atoms/Text'
import * as S from './PostCard.style'

const PostCard = ({ post }) => {
  const members = useSelector(s => s.members)
  return (
    <S.PostCard>
      <Text size="M" text={members[post.userID].displayName} unique />
      <S.DisplayPhoto src={members[post.userID].photoURL} alt="display profile" />
      <Text size="M" text={post.bodyText} unique />
    </S.PostCard>
  )
}

export default PostCard
