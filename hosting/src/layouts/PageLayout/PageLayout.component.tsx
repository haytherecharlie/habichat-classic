import React from 'react'
import GlobalStyle from 'assets/theme/global.style'
import SEO from 'atoms/SEO'
import Spinner from 'atoms/Spinner'
import Header from 'components/Header'
import Footer from 'components/Footer'
import useDimensions from 'utils/hooks/useDimensions'
import * as S from './PageLayout.style'

const PageLayout = ({ children, page, crawl, style = {}, loading = false }) => {
  useDimensions()

  return (
    <S.PageLayout>
      <GlobalStyle />
      <SEO page={page} crawl={crawl} />
      <Header />
      {loading ? (
        <S.Main style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Spinner />
        </S.Main>
      ) : (
        <S.Main style={style}>{children}</S.Main>
      )}
      <Footer />
    </S.PageLayout>
  )
}

export default PageLayout
