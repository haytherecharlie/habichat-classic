import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TOGGLE_NAV } from 'services/redux/actions'
import Logo from 'components/Logo'
import * as S from './Header.style'

const Header = () => {
  const dispatch = useDispatch()
  const { nav } = useSelector((s) => s.app)

  return (
    <S.Header>
      <S.Wrapper align="flex-start">
        <Logo />
      </S.Wrapper>
      <S.Wrapper align="flex-end">
        <S.HamburgerMenu onClick={() => dispatch({ type: TOGGLE_NAV })}>
          <S.TopLine open={nav} />
          <S.MidLine open={nav} />
          <S.BottomLine open={nav} />
        </S.HamburgerMenu>
      </S.Wrapper>
    </S.Header>
  )
}

export default Header
