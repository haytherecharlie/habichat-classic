import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NAV } from 'services/redux/actions'
import Hamburger from 'ui/atoms/Hamburger'
import Link from 'ui/atoms/Link'
import ButtonPill from 'ui/atoms/ButtonPill'
import Logo from 'ui/atoms/Logo'
import Responsive from 'ui/atoms/Responsive'
import Text from 'ui/atoms/Text'
import Nav from 'ui/components/Nav'
import * as S from './Header.style'

export const AppHeader = () => {
  return (
    <S.AppHeader>
      <Responsive>
        <S.Column
          style={{
            flex: 1,
            paddingLeft: 5,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}>
          <Logo />
          <Text size="XS" text="Toronto, ON, Canada" style={{ marginTop: 2 }} bold unique />
        </S.Column>
        <S.Column style={{ flex: `0 0 90px`, paddingRight: 5, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Link href="/">
            <ButtonPill>
              <Text
                size="XS"
                text="Log Out"
                unique
                bold
                style={{ color: '#FFF', textAlign: 'center', margin: `12px 15px 10px 15px` }}
              />
            </ButtonPill>
          </Link>
        </S.Column>
      </Responsive>
    </S.AppHeader>
  )
}

export const Header = () => {
  const dispatch = useDispatch()
  const { dimensions, nav } = useSelector(s => s.ui)

  if (dimensions === 'desktop') {
    return (
      <S.Header>
        <Responsive>
          <Link href="/">
            <Logo type="logotype" />
          </Link>
          <Nav />
          <Link href="/H4E">
            <ButtonPill>
              <Text
                size="XS"
                text="Log In"
                unique
                bold
                style={{ color: '#FFF', textAlign: 'center', margin: `12px 15px 10px 15px` }}
              />
            </ButtonPill>
          </Link>
        </Responsive>
      </S.Header>
    )
  }

  return (
    <S.Header>
      <Responsive>
        <S.Column style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
          <Hamburger nav={nav} onClick={() => dispatch({ type: NAV })} />
        </S.Column>
        <S.Column style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Link href="/">
            <Logo type="logotype" />
          </Link>
        </S.Column>
        <S.Column style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
          <Link href="/H4E">
            <ButtonPill>
              <Text
                size="XS"
                text="Log In"
                unique
                bold
                style={{ color: '#FFF', textAlign: 'center', margin: `12px 15px 10px 15px` }}
              />
            </ButtonPill>
          </Link>
        </S.Column>
        <Nav />
      </Responsive>
    </S.Header>
  )
}

export default Header
