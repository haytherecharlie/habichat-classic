import React from 'react'
import theme from 'assets/theme'
import Link from 'atoms/Link'
import Text from 'atoms/Text'
import * as S from './Footer.style'

const Footer = () => {
  const date = new Date()

  return (
    <S.Footer>
      <S.Responsive align="flex-start" flex={2}>
        <Text size="XS" text={`© ${date.getFullYear()} habichat`} unique />
      </S.Responsive>
      <S.Responsive align="flex-end" flex={1}>
        <Link href="https://twitter.com/habichat1">
          <S.Twitter color={theme.BACKGROUND_COLOR} fontSize="10" />
        </Link>
        <Link href="https://github.com/habichat">
          <S.Github color={theme.BACKGROUND_COLOR} fontSize="10" />
        </Link>
        <Link href="https://www.linkedin.com/company/habichat">
          <S.LinkedIn color={theme.BACKGROUND_COLOR} fontSize="10" />
        </Link>
      </S.Responsive>
    </S.Footer>
  )
}

export default Footer
