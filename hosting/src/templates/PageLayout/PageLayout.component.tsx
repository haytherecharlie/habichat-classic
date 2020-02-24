import React from 'react'
import GlobalStyle from 'assets/styles/global.style'
import useDimensions from 'utils/hooks/useDimensions'
import Helmet from 'atoms/Helmet'
import * as S from './PageLayout.style'

const PageLayout = ({ children }) => {
  useDimensions()
  return (
    <S.Wrapper>
      <GlobalStyle />
      <Helmet />
      {children}
    </S.Wrapper>
  )
}

export default PageLayout
