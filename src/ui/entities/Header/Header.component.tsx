import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NAV } from 'services/redux/actions'
import Hamburger from 'ui/atoms/Hamburger'
import Link from 'ui/atoms/Link'
import Logo from 'ui/atoms/Logo'
import Responsive from 'ui/atoms/Responsive'
import DropDownNav from 'ui/components/DropDownNav'
import * as S from './Header.style'

export const Header = () => {
  const dispatch = useDispatch()
  const { dimensions, nav } = useSelector(s => s.ui)

  if (dimensions === 'desktop')
    return (
      <S.Header>
        <Responsive>
          <Link href="/">
            <Logo type="logotype" />
          </Link>
          <DropDownNav />
        </Responsive>
      </S.Header>
    )
  return (
    <S.Header>
      <Responsive>
        <S.Column style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Link href="/">
            <Logo type="logotype" />
          </Link>
        </S.Column>
        <S.Column style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Hamburger nav={nav} onClick={() => dispatch({ type: NAV })} />
        </S.Column>
        <DropDownNav />
      </Responsive>
    </S.Header>
  )
}

export default Header
