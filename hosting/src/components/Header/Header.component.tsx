import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TOGGLE_NAV } from 'services/redux/actions'
import Link from 'atoms/Link'
import Logo from 'atoms/Logo'
import ChangeLocale from 'atoms/ChangeLocale'
import Hamburger from 'atoms/Hamburger'
import * as S from './Header.style'

const Header = () => {
  const dispatch = useDispatch()
  const { dimensions, nav } = useSelector(s => s.app)

  if (dimensions === 'mobile') {
    return (
      <S.Header>
        <S.Responsive>
          <Logo />
          <Hamburger nav={nav} onClick={() => dispatch({ type: TOGGLE_NAV })} />
        </S.Responsive>
      </S.Header>
    )
  }

  if (dimensions === 'desktop') {
    return (
      <S.Header>
        <S.Responsive>
          <S.Responsive justify="space-between" flex={1.5}>
            <Logo />
            <Link href="/" text="header-home" />
            <Link href="/terms" text="header-terms" />
            <Link href="/privacy" text="header-privacy" />
          </S.Responsive>
          <S.Responsive justify="flex-end" flex={1}>
            <ChangeLocale />
          </S.Responsive>
        </S.Responsive>
      </S.Header>
    )
  }
}

export default Header
