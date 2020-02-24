import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TOGGLE_NAV } from 'services/redux/actions'
import * as S from './Hamburger.style'

const Hamburger = () => {
  const dispatch = useDispatch()
  const { nav } = useSelector((s) => s.app)
  return (
    <S.HamburgerMenu onClick={() => dispatch({ type: TOGGLE_NAV })}>
      <S.TopLine open={nav} />
      <S.MidLine open={nav} />
      <S.BottomLine open={nav} />
    </S.HamburgerMenu>
  )
}

export default Hamburger
