import React from 'react'
import theme from 'assets/theme'
import * as S from './Logo.style'

const Logo = () => {
  const logo = theme.DARK_MODE ? require('assets/images/logo-light.png') : require('assets/images/logo-dark.png')
  return <S.Logo source={logo} alt="habichat logo" />
}

export default Logo
