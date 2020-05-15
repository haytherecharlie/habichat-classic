import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ChangeLocale from 'atoms/ChangeLocale'
import Link from 'atoms/Link'
import Text from 'atoms/Text'
import * as S from './Nav.style'

const Nav = ({ locale }) => {
  const [open, setOpen] = useState(false)
  const { nav, dimensions } = useSelector(s => s.app)

  useEffect(() => {
    if (dimensions !== `desktop`) return nav ? setOpen(true) : setOpen(false)
    return setOpen(true)
  }, [dimensions, nav])

  return open ? (
    <S.Nav open={open}>
      <S.Links>
        <Link href="/">
          <Text size="S" text="nav-home" style={{ margin: `10px 0` }} link />
        </Link>
        <Link href="https://habi.chat/blog">
          <Text size="S" text="nav-blog" style={{ margin: `10px 0` }} link />
        </Link>
        <Link href="/privacy">
          <Text size="S" text="nav-privacy" style={{ margin: `10px 0` }} link />
        </Link>
        <Link href="/terms">
          <Text size="S" text="nav-terms" style={{ margin: `10px 0` }} link />
        </Link>
      </S.Links>
      <S.Locale>{locale && <ChangeLocale />}</S.Locale>
    </S.Nav>
  ) : null
}

export default Nav
