import React from 'react'
import GlobalStyle from 'assets/theme/global.style'
import * as S from './ScreenLayout.style'

const ScreenLayout = ({ children }) => {
  return (
    <S.ScreenLayout>
      <GlobalStyle />
      {children}
    </S.ScreenLayout>
  )
}

export default ScreenLayout
