import React, { Fragment } from 'react'
import { StatusBar } from 'react-native'
import theme from 'assets/styles'
import * as S from './HeaderLayout.style'

const HeaderLayout = ({ children }) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor={theme.HEADER_BACKGROUND} />
      <S.StatusBar />
      <S.Header>{children}</S.Header>
    </Fragment>
  )
}

export default HeaderLayout
