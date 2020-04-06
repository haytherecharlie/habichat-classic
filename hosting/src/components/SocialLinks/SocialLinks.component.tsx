import React from 'react'
import theme from 'assets/styles/theme.style'
import * as S from './SocialLinks.style'

const SocialLinks = () => {
  return (
    <S.SocialLinks>
      <S.Link href="https://twitter.com/habichat1">
        <S.Twitter color={theme.PRIMARY_COLOR} fontSize="20" />
      </S.Link>
      <S.Link href="https://github.com/habichat">
        <S.Github color={theme.PRIMARY_COLOR} fontSize="15" />
      </S.Link>
      <S.Link href="https://www.linkedin.com/company/habichat">
        <S.LinkedIn color={theme.PRIMARY_COLOR} fontSize="15" />
      </S.Link>
    </S.SocialLinks>
  )
}

export default SocialLinks
