import React from 'react'
import GlobalStyle from 'assets/styles/global.style'
import LoadingSpinner from 'components/LoadingSpinner'
import Header from 'components/Header'
import Footer from 'components/Footer'
import * as S from './Wrapper.style'

const Wrapper = ({ children = null, loading = false, max = '100vw', type = 'page' }) => {
  return (
    <S.Wrapper>
      <GlobalStyle />
      <S.Panel flex="1 1 0" />
      <S.Panel flex={`1 0 ${max}`} center={true}>
        {type === 'page' && <Header />}
        <S.Main type={type}>
          {loading ? <S.Loading><LoadingSpinner /></S.Loading> : children}
        </S.Main>
        {type === 'page' && <Footer />}
      </S.Panel>
      <S.Panel flex="1 1 0" />
    </S.Wrapper>
  )
}

export default Wrapper
