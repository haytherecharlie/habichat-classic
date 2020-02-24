import React from 'react'
import * as S from './Link.style'

const Link = ({ href = '#', children = null }) => {
  return <S.Link href={href}>{children}</S.Link>
}

export default Link
