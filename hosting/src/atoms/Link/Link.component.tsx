import React from 'react'
import * as S from './Link.style'

const Link = ({ to = '#', children = null }) => {
  return <S.Link href={to}>{children}</S.Link>
}

export default Link
