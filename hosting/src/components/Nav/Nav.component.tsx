import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChangeLocale from 'atoms/ChangeLocale'
import Link from 'atoms/Link'
import Text from 'atoms/Text'
import * as S from './Nav.style'

const Nav = ({ locale }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const { nav, dimensions } = useSelector(s => s.app)
  const onClick = () => dispatch({ type: 'TOGGLE_NAV' })

  useEffect(() => {
    if (dimensions !== `desktop`) return nav ? setOpen(true) : setOpen(false)
    return setOpen(true)
  }, [dimensions, nav])

  return open ? (
    <S.Nav open={open}>
      <S.Links>
        <Link href="/" onClick={onClick}>
          <Text size="S" text="nav-home" style={{ margin: `10px 0` }} link />
        </Link>
        <Link href="/terms" onClick={onClick}>
          <Text size="S" text="nav-terms" style={{ margin: `10px 0` }} link />
        </Link>
        <Link href="/privacy" onClick={onClick}>
          <Text size="S" text="nav-privacy" style={{ margin: `10px 0` }} link />
        </Link>
      </S.Links>
      <S.Locale>{locale && <ChangeLocale onClick={onClick} />}</S.Locale>
    </S.Nav>
  ) : null
}

export default Nav
