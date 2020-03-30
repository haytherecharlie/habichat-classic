import React from 'react'
import Helmet from 'react-helmet'
import GlobalStyle from 'src/assets/styles/global.style'
import * as S from './PageLayout.style'

const PageLayout = ({ children = '', darkMode }) => {
  return (
    <S.PageLayout>
      <GlobalStyle darkMode={darkMode} />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>
      {children}
    </S.PageLayout>
  )
}

export default PageLayout
