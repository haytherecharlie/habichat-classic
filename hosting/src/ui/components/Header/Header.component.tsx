import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NAV } from 'services/redux/actions'
import Link from 'ui/atoms/Link'
import Logo from 'ui/atoms/Logo'
import ProfileToggle from 'ui/atoms/ProfileToggle'
import Responsive from 'ui/atoms/Responsive'
import Hamburger from 'ui/atoms/Hamburger'
import Nav from 'ui/components/Nav'

import * as S from './Header.style'

const Header = () => {
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
