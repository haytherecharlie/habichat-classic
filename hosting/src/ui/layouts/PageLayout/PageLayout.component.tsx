import React from 'react'
import GlobalStyle from 'ui/assets/theme/global.style'
import SEO from 'ui/atoms/SEO'
import Spinner from 'ui/atoms/Spinner'
import Header from 'ui/components/Header'
import { WebFooter } from 'ui/components/Footer'
import useDimensions from 'ui/hooks/useDimensions'
import useLanguage from 'ui/hooks/useLanguage'
import * as S from './PageLayout.style'

const PageLayout = ({ children, page, crawl, style = {}, loading = false }) => {
  useDimensions()
  useLanguage()

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
      <WebFooter />
    </S.PageLayout>
  )
}

export default PageLayout
