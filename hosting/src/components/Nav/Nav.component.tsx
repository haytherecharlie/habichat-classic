import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Link from 'atoms/Link'
import ChangeLocale from 'atoms/ChangeLocale'
import * as S from './Nav.style'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const { nav, dimensions } = useSelector(s => s.app)

  useEffect(() => {
    if (dimensions !== `desktop`) return nav ? setOpen(true) : setOpen(false)
    return setOpen(true)
  }, [dimensions, nav])

  return open ? (
    <S.Nav open={open}>
      <S.Links>
        <Link to="/" text="header-home" />
        <Link to="/terms" text="header-terms" />
        <Link to="/privacy" text="header-privacy" />
      </S.Links>
      <S.Locale>
        <ChangeLocale />
      </S.Locale>
    </S.Nav>
  ) : null
}

export default Nav
