import React from 'react'

import * as S from './Footer.style'

const Footer = () => {
  const date = new Date()

  return (
    <S.Footer>
      <S.Responsive align="flex-start" flex={2}>
        <S.Copyright>&copy; {date.getFullYear()} habichat</S.Copyright>
      </S.Responsive>
      <S.Responsive align="flex-end" flex={1}>
        <S.SocialLinks>
          <S.Link href="https://twitter.com/habichat1">
            <S.Twitter color="#000" fontSize="20" />
          </S.Link>
          <S.Link href="https://github.com/habichat">
            <S.Github color="#000" fontSize="15" />
          </S.Link>
          <S.Link href="https://www.linkedin.com/company/habichat">
            <S.LinkedIn color="#000" fontSize="15" />
          </S.Link>
        </S.SocialLinks>
      </S.Responsive>
    </S.Footer>
  )
}

export default Footer
