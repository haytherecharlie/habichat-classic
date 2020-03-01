import React from 'react'
import logoDark from 'assets/images/logo-dark.png'
import * as S from './Logo.style'

const Logo = () => {
  return (
    <S.Logo>
      <S.Icon source={logoDark} alt="habichat logo" />
      <S.Title>habichat</S.Title>
    </S.Logo>
  )
}

export default Logo
