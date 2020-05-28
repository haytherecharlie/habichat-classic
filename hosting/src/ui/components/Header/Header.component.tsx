import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TOGGLE_NAV } from 'services/redux/actions'
import Link from 'ui/atoms/Link'
import Logo from 'ui/atoms/Logo'
import Hamburger from 'ui/atoms/Hamburger'
import Nav from 'ui/components/Nav'
import * as S from './Header.style'

const Header = () => {
  const dispatch = useDispatch()
  const { dimensions, nav } = useSelector(s => s.app)

  if (dimensions === 'mobile') {
    return (
      <S.Header>
        <S.Responsive>
          <Link href="/">
            <Logo />
          </Link>
          <Hamburger nav={nav} onClick={() => dispatch({ type: TOGGLE_NAV })} />
          <Nav />
        </S.Responsive>
      </S.Header>
    )
  }

  if (dimensions === 'desktop') {
    return (
      <S.Header>
        <S.Responsive>
          <Link href="/">
            <Logo />
          </Link>
          <Nav />
        </S.Responsive>
      </S.Header>
    )
  }
}

export default Header
