import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NAV } from 'services/redux/actions'
import Hamburger from 'ui/atoms/Hamburger'
import Link from 'ui/atoms/Link'
import Logo from 'ui/atoms/Logo'
import ProfileToggle from 'ui/atoms/ProfileToggle'
import Responsive from 'ui/atoms/Responsive'
import Text from 'ui/atoms/Text'
import Nav from 'ui/components/Nav'
import * as S from './Header.style'

export const AppHeader = () => {
  return (
    <S.AppHeader>
      <Responsive>
        <S.Column
          style={{ flex: 1, paddingLeft: 5, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
          <Logo />
          <Text size="XS" text="Ville-Émard, Montréal, QC H4E" style={{ marginTop: 0 }} bold unique />
        </S.Column>
        <S.Column style={{ flex: 0, paddingRight: 5, justifyContent: 'flex-end', alignItems: 'center' }}>
          <ProfileToggle style={{ height: 30, width: 30 }} />
        </S.Column>
      </Responsive>
    </S.AppHeader>
  )
}

export const Header = () => {
  const dispatch = useDispatch()
  const { dimensions, nav } = useSelector(s => s.ui)

  if (dimensions === 'mobile') {
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
            <ProfileToggle />
          </S.Column>
          <Nav />
        </Responsive>
      </S.Header>
    )
  }

  if (dimensions === 'desktop') {
    return (
      <S.Header>
        <Responsive>
          <Link href="/">
            <Logo type="logotype" />
          </Link>
          <Nav />
          <ProfileToggle />
        </Responsive>
      </S.Header>
    )
  }
}

export default Header
