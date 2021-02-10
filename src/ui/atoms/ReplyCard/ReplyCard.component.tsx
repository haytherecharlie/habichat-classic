import React from 'react'
import Avatar from 'ui/atoms/Avatar'
import Text from 'ui/atoms/Text'
import * as S from './ReplyCard.style'

const ReplyCard = ({ reply }) => {
  return (
    <S.ReplyCard>
      <S.LeftCard>
        <Avatar src={reply.author.photoURL} style={{ height: 30, width: 30 }} alt="avatar" />
      </S.LeftCard>
      <S.RightCard>
        <Text size="XS" text={reply.author.displayName} bold unique />
        <Text size="S" text={reply.text} style={{ marginTop: 5, fontWeight: 300 }} unique />
      </S.RightCard>
    </S.ReplyCard>
  )
}

export default ReplyCard
