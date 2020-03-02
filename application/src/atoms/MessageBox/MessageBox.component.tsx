import React from 'react'
import Text from 'atoms/Text'
import { formatTimestamp } from 'utils/helpers'
import theme from 'assets/styles/theme.style'
import * as S from './MessageBox.style'

const MessageBox = ({ message, member }) => {

  const { server, text, image, updated } = message
  const timestamp = formatTimestamp(updated)
  return (
    <S.MessageWrapper>
      <S.WhiteBox elevation={1}>
        <S.AuthorCircle source={{ uri: member.photoUrl }} alt="profile photo" />
        <S.Header>
          <Text size="h3">{member.name}</Text>
          {server ? (
            <S.Icon name="ios-checkmark-circle" color={theme.BRAND_COLOR} size={12} />
          ) : (
            <S.Icon name="ios-checkmark-circle-outline" color={theme.BRAND_COLOR} size={12} />
          )}
        </S.Header>
        <S.Body>
          <Text size="body">{text}</Text>
          {image && <S.ImageBody source={image} alt="image" />}
        </S.Body>
        <S.Time>{timestamp}</S.Time>
      </S.WhiteBox>
    </S.MessageWrapper>
  )
}

export default MessageBox
