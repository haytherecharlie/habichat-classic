import React from 'react'
import { formatDistance } from 'date-fns'
import * as S from './MessageBox.style'

const MessageBox = ({ message, member, listRef }) => {
  if (listRef && listRef.current) listRef.current.scrollToEnd({ animated: true })

  return (
    <S.MessageWrapper>
      <S.WhiteBox elevation={1}>
        <S.AuthorCircle source={{ uri: member.photoUrl }} alt="profile photo" />
        <S.Header>
          <S.Name>{member.name}</S.Name>
          <S.Time>{`${formatDistance(member.updated._seconds, new Date().getTime(), { addSuffix: true })}`}</S.Time>
        </S.Header>
        <S.Body>
          <S.MessageText>{message.text}</S.MessageText>
          {message.image && <S.ImageBody source={message.image} alt="image" />}
        </S.Body>
      </S.WhiteBox>
    </S.MessageWrapper>
  )
}

export default MessageBox
