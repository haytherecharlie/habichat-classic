import React from 'react'
import * as S from './Avatar.style'

const Avatar = ({ source, onPress }) => {
  return (
    <S.Avatar onPress={onPress}>
      <S.Photo source={source} alt="avatar" />
    </S.Avatar>
  )
}

export default Avatar
