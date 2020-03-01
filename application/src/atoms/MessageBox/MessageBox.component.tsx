import React from 'react'
import Text from 'atoms/Text'
import { formatDistance } from 'date-fns'
import theme from 'assets/styles/theme.style'
import * as S from './MessageBox.style'

const MessageBox = ({ message, member, listRef }) => {
  if (listRef && listRef.current) listRef.current.scrollToEnd({ animated: true })

  // console.log(member.updated.toDate())
  return (
    <S.MessageWrapper>
      <S.WhiteBox elevation={1}>
        <S.AuthorCircle source={{ uri: member.photoUrl }} alt="profile photo" />
        <S.Header>
          <Text size="h3">{member.name}</Text>
          <S.Time>{`${formatDistance(message.updated, new Date().getTime(), { addSuffix: true })}`}</S.Time>
          {message.server ? (
            <S.Icon name="ios-checkmark-circle" color={theme.BRAND_COLOR} size={12} />
          ) : (
            <S.Icon name="ios-checkmark-circle-outline" color={theme.BRAND_COLOR} size={12} />
          )}
        </S.Header>
        <S.Body>
          <Text size="body">{message.text}</Text>
          {message.image && <S.ImageBody source={message.image} alt="image" />}
        </S.Body>
      </S.WhiteBox>
    </S.MessageWrapper>
  )
}

export default MessageBox
