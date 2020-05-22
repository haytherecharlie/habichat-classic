import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChangeLocale from 'atoms/ChangeLocale'
import Link from 'atoms/Link'
import Text from 'atoms/Text'
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
        <Link type="internal" href="/" onClick={onClick}>
          <Text size="S" text="nav-home" style={{ margin: `10px 0` }} link />
        </Link>
        <Link type="internal" href="/blog" onClick={onClick}>
          <Text size="S" text="nav-blog" style={{ margin: `10px 0` }} link />
        </Link>
        <Link type="internal" href="/privacy" onClick={onClick}>
          <Text size="S" text="nav-privacy" style={{ margin: `10px 0` }} link />
        </Link>
        <Link type="internal" href="/terms" onClick={onClick}>
          <Text size="S" text="nav-terms" style={{ margin: `10px 0` }} link />
        </Link>
      </S.Links>
      <S.Locale>
        <ChangeLocale onClick={onClick} />
      </S.Locale>
    </S.Nav>
  ) : null
}

export default Nav
