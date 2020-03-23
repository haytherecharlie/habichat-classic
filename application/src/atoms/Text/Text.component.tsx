import React from 'react'
import * as S from './Text.style'

const Text = ({ size = null, children = '', style = {} }) => {
  switch (size) {
    case 'h1':
      return <S.h1 style={style}>{children}</S.h1>
    case 'h2':
      return <S.h2 style={style}>{children}</S.h2>
    case 'h3':
      return <S.h3 style={style}>{children}</S.h3>
    case 'p':
      return <S.p style={style}>{children}</S.p>
    default:
      return <S.span style={style}>{children}</S.span>
  }
}

export default Text
