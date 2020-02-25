import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIntl } from 'gatsby-plugin-intl'
import { TOGGLE_NAV } from 'services/redux/actions'
import Link from 'atoms/Link'
import Logo from 'atoms/Logo'
import Hamburger from 'atoms/Hamburger'
import * as S from './Header.style'

const Header = () => {
  const dispatch = useDispatch()
  const intl = useIntl()
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
          <S.Responsive justify="space-between">
            <Logo />
            <Link to="/blog/welcome">{intl.formatMessage({ id: 'header-home' })}</Link>
            <Link to="google.ca">{intl.formatMessage({ id: 'header-blog' })}</Link>
            <Link to="google.ca">{intl.formatMessage({ id: 'header-pricing' })}</Link>
            <Link to="google.ca">{intl.formatMessage({ id: 'header-get-in-touch' })}</Link>
          </S.Responsive>
          <S.Responsive justify="flex-end">
            <Link to="google.ca">{intl.formatMessage({ id: 'header-sign-in-register' })}</Link>
          </S.Responsive>
        </S.Responsive>
      </S.Header>
    )
  }
}

export default Header
