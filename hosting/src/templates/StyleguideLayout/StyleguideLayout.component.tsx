import React from 'react'
import GlobalStyle from 'assets/theme/global.style'
import * as S from './StyleguideLayout.style'

const StyleguideLayout = ({ children }) => {
  return (
    <S.Wrapper>
      <GlobalStyle />
      {children}
    </S.Wrapper>
  )
}

export default StyleguideLayout
