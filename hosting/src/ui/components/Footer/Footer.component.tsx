import React from 'react'
import theme from 'ui/assets/theme'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import * as S from './Footer.style'

const Footer = () => {
  const date = new Date()

  return (
    <S.Footer>
      <S.Responsive align="flex-start" flex={2}>
        <Text size="XS" text={`© ${date.getFullYear()} habichat`} unique />
      </S.Responsive>
      <S.Responsive align="flex-end" flex={1}>
        <Link type="external" href="https://twitter.com/habichat1">
          <S.Twitter color={theme.BACKGROUND_COLOR} fontSize="10" />
        </Link>
        <Link type="external" href="https://github.com/habichat">
          <S.Github color={theme.BACKGROUND_COLOR} fontSize="10" />
        </Link>
        <Link type="external" href="https://www.linkedin.com/company/habichat">
          <S.LinkedIn color={theme.BACKGROUND_COLOR} fontSize="10" />
        </Link>
      </S.Responsive>
    </S.Footer>
  )
}

export default Footer
