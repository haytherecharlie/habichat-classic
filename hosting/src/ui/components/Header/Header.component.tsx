import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NAV } from 'services/redux/actions'
import Link from 'ui/atoms/Link'
import Logo from 'ui/atoms/Logo'
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
          <Link href="/">
            <Logo />
          </Link>
          <Hamburger nav={nav} onClick={() => dispatch({ type: NAV })} />
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
            <Logo />
          </Link>
          <Nav />
        </Responsive>
      </S.Header>
    )
  }
}

export default Header
