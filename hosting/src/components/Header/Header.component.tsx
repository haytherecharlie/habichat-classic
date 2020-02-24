import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'atoms/Link'
import Logo from 'atoms/Logo'
import Hamburger from 'atoms/Hamburger'
import * as S from './Header.style'

const Header = () => {
  const { dimensions } = useSelector((s) => s.app)

  if (dimensions === 'mobile') {
    return (
      <S.Header>
        <S.Responsive>
          <Logo />
          <Hamburger />
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
            <Link to="google.ca">Home</Link>
            <Link to="google.ca">Blog</Link>
            <Link to="google.ca">Pricing</Link>
            <Link to="google.ca">Get In Touch</Link>
          </S.Responsive>
          <S.Responsive justify="flex-end">
            <Link to="google.ca">Sign In / Register</Link>
          </S.Responsive>
        </S.Responsive>
      </S.Header>
    )
  }
}

export default Header
