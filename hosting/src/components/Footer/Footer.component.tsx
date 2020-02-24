import React from 'react'
import SocialLinks from 'components/SocialLinks'
import * as S from './Footer.style'

const Footer = () => {
  return (
    <S.Footer>
      <S.Wrapper align="flex-start" flex={1}>
        <SocialLinks />
      </S.Wrapper>
      <S.Wrapper align="flex-end" flex={2}>
        <S.Copyright>&copy; 2020 Habichat</S.Copyright>
      </S.Wrapper>
    </S.Footer>
  )
}

export default Footer
