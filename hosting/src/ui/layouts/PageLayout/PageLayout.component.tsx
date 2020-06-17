import React from 'react'
import { useSelector } from 'react-redux'
import GlobalStyle from 'ui/assets/theme/global.style'
import SEO from 'ui/atoms/SEO'
import Spinner from 'ui/atoms/Spinner'
import Header from 'ui/components/Header'
import { WebFooter } from 'ui/components/Footer'
import usePageLayout from 'ui/hooks/usePageLayout'
import * as S from './PageLayout.style'

const PageLayout = ({ children, page, crawl, style = {} }) => {
  usePageLayout()
  const { loading } = useSelector(s => s.ui)

  return (
    <S.PageLayout>
      <GlobalStyle />
      <SEO page={page} crawl={crawl} />
      {!loading && <Header />}
      {loading ? <Spinner /> : <S.Main style={style}>{children}</S.Main>}
      {!loading && <WebFooter />}
    </S.PageLayout>
  )
}

export default PageLayout
