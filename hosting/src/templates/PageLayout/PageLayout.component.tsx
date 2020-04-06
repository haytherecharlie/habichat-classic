import React from 'react'
import GlobalStyle from 'assets/theme/global.style'
import useDimensions from 'utils/hooks/useDimensions'
import * as S from './PageLayout.style'

const PageLayout = ({ children }) => {
  useDimensions()
  return (
    <S.Wrapper>
      <GlobalStyle />
      {children}
    </S.Wrapper>
  )
}

export default PageLayout
