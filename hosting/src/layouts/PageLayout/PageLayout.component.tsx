import React from 'react'
import GlobalStyle from 'assets/theme/global.style'
import SEO from 'atoms/SEO'
import Header from 'components/Header'
import Footer from 'components/Footer'
import useDimensions from 'utils/hooks/useDimensions'
import * as S from './PageLayout.style'

const PageLayout = ({ children, page, crawl, style = {} }) => {
  useDimensions()

  return (
    <S.PageLayout>
      <GlobalStyle />
      <SEO page={page} crawl={crawl} />
      <Header />
      <S.Main top={top} style={style}>
        {children}
      </S.Main>
      <Footer />
    </S.PageLayout>
  )
}

export default PageLayout
