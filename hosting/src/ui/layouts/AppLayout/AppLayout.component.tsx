import React from 'react'
import GlobalStyle from 'ui/assets/theme/global.style'
import SEO from 'ui/atoms/SEO'
import { AppHeader } from 'ui/components/Header'
import { AppFooter } from 'ui/components/Footer'
import useLayout from 'ui/hooks/useLayout'
import * as S from './AppLayout.style'

const AppLayout = ({ children, page, crawl, style = {}, loading = false, addButton = false }) => {
  useLayout()

  return (
    <S.AppLayout>
      <GlobalStyle />
      <SEO page={page} crawl={crawl} />
      <AppHeader />
      <S.Main style={style}>{children}</S.Main>
      <AppFooter addButton={addButton} />
    </S.AppLayout>
  )
}

export default AppLayout
