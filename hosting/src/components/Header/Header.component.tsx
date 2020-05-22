import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TOGGLE_NAV } from 'services/redux/actions'
import Logo from 'atoms/Logo'
import Hamburger from 'atoms/Hamburger'
import Nav from 'components/Nav'
import * as S from './Header.style'

const Header = ({ locale = true }) => {
  const dispatch = useDispatch()
  const { dimensions, nav } = useSelector(s => s.app)

  if (dimensions === 'mobile') {
    return (
      <S.Header>
        <S.Responsive>
          <Logo />
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
          <Logo />
          <Nav />
        </S.Responsive>
      </S.Header>
    )
  }
}

export default Header
