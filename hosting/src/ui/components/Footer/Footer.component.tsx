import React from 'react'
import theme from 'ui/assets/theme'
import Link from 'ui/atoms/Link'
import NewPostButton from 'ui/atoms/NewPostButton'
import Text from 'ui/atoms/Text'
import * as S from './Footer.style'

export const WebFooter = () => {
  const date = new Date()

  return (
    <S.Footer>
      <S.Responsive style={{ margin: `0 auto` }}>
        <S.Responsive style={{ justifyContent: 'flex-start', flex: 2 }}>
          <Text size="XS" text={`© ${date.getFullYear()} habichat`} unique />
        </S.Responsive>
        <S.Responsive style={{ justifyContent: 'flex-end', flex: 1, marginRight: -5 }}>
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
      </S.Responsive>
    </S.Footer>
  )
}

export const AppFooter = ({ addButton = false }) => {
  return (
    <S.Footer style={{ position: 'fixed', bottom: 0, left: 0 }}>
      <S.Responsive style={{ justifyContent: 'center', flex: 1, margin: `0 auto` }}>
        {addButton && <NewPostButton />}
        <Text size="XS" text="This is where ads will go." unique />
      </S.Responsive>
    </S.Footer>
  )
}
