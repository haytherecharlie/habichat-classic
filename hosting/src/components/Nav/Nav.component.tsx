import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'atoms/Link'
import ChangeLocale from 'atoms/ChangeLocale'
import * as S from './Nav.style'

const Nav = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const { nav, dimensions } = useSelector(s => s.app)

  useEffect(() => {
    if (dimensions !== `desktop`) return nav ? setOpen(true) : setOpen(false)
    return setOpen(true)
  }, [dimensions, nav])

  const onClick = () => dispatch({ type: 'TOGGLE_NAV' })

  return open ? (
    <S.Nav open={open}>
      <S.Links>
        <Link to="/" text="header-home" onClick={onClick} />
        <Link to="/terms" text="header-terms" onClick={onClick} />
        <Link to="/privacy" text="header-privacy" onClick={onClick} />
      </S.Links>
      <S.Locale>
        <ChangeLocale onClick={onClick} />
      </S.Locale>
    </S.Nav>
  ) : null
}

export default Nav
