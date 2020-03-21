import React from 'react'
import Logo from 'atoms/Logo'
import ProfileCircle from 'atoms/ProfileCircle'
import * as S from './Header.style'

export const Left = () => {
  return (
    <S.Left>
      <Logo />
    </S.Left>
  )
}

export const Right = () => {
  return (
    <S.Right>
      <ProfileCircle />
    </S.Right>
  )
}

export default {
  Right,
  Left
}
