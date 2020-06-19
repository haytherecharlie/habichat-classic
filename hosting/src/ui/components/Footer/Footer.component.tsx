import React from 'react'
import { pathOr } from 'ramda'
import { navigate } from '@reach/router'
import { useDispatch, useSelector } from 'react-redux'
import theme from 'ui/assets/theme'
import Link from 'ui/atoms/Link'
import Responsive from 'ui/atoms/Responsive'
import Text from 'ui/atoms/Text'
import * as S from './Footer.style'

export const WebFooter = () => {
  const date = new Date()

  return (
    <S.Footer>
      <Responsive style={{ margin: `0 auto` }}>
        <Responsive style={{ justifyContent: 'flex-start', flex: 2 }}>
          <Text size="XS" text={`© ${date.getFullYear()} habichat`} unique />
        </Responsive>
        <Responsive style={{ justifyContent: 'flex-end', flex: 1, marginRight: -5 }}>
          <Link type="external" href="https://twitter.com/habichat1">
            <S.Twitter color={theme.BACKGROUND_COLOR} fontSize="10" />
          </Link>
          <Link type="external" href="https://github.com/habichat">
            <S.Github color={theme.BACKGROUND_COLOR} fontSize="10" />
          </Link>
          <Link type="external" href="https://www.linkedin.com/company/habichat">
            <S.LinkedIn color={theme.BACKGROUND_COLOR} fontSize="10" />
          </Link>
        </Responsive>
      </Responsive>
    </S.Footer>
  )
}

export const AppFooter = ({ addButton = false }) => {
  const dispatch = useDispatch()
  const modal = useSelector(s => pathOr(null, ['ui', 'modal'], s))
  const authenticated = useSelector(s => pathOr(null, ['account', 'authenticated'], s))

  const clickNewPost = () => {
    return authenticated ? dispatch({ type: 'MODAL', value: 'new-post' }) : navigate('/login')
  }

  return (
    <S.AppFooter style={{ position: 'fixed', bottom: 0, left: 0 }}>
      <Responsive style={{ justifyContent: 'center', flex: 1, margin: `0 auto` }}>
        {addButton && !modal && (
          <Link type="button" onClick={clickNewPost}>
            <S.NewPostButton>
              <img src="/image/create-post.png" height="20px" alt="compose new post" />
            </S.NewPostButton>
          </Link>
        )}
        <div
          style={{
            background: '#FFF',
            width: `100%`,
            maxWidth: 600,
            height: `70%`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: `0px 30px`,
            border: `1px solid rgba(0,0,0,0.4)`
          }}>
          <Text size="M" text="ICI, C'EST PEPSI" bold unique style={{ color: '#00366e' }} />
          <img src="/image/pepsi-ad.png" style={{ height: 35, width: 35 }} alt="pepsi ad" />
        </div>
      </Responsive>
    </S.AppFooter>
  )
}
