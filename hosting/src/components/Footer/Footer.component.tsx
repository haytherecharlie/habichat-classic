import React from 'react'
import SocialLinks from 'components/SocialLinks'
import * as S from './Footer.style'

const Footer = () => {
  const date = new Date()
  return (
    <S.Footer>
      <S.Responsive align="flex-start" flex={2}>
        <S.Copyright>&copy; {date.getFullYear()} Insert Company Here</S.Copyright>
      </S.Responsive>
      <S.Responsive align="flex-end" flex={1}>
        <SocialLinks />
      </S.Responsive>
    </S.Footer>
  )
}

export default Footer
