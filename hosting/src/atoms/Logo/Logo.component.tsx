import React from 'react'
import habichat from 'assets/images/habichat.png'
import * as S from './Logo.style'

const Logo = () => {
  return (
    <S.Logo>
      <S.Icon src={habichat} alt="habichat logo" />
      <S.Text size="h2">habichat</S.Text>
    </S.Logo>
  )
}

export default Logo
