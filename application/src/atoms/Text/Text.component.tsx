import React from 'react'
import * as S from './Text.style'

const Text = ({ size = '', children = '' }) => {
  switch (size) {
    case 'h1':
      return <S.h1>{children}</S.h1>
    case 'h2':
      return <S.h2>{children}</S.h2>
    case 'h3':
      return <S.h3>{children}</S.h3>
    case 'p':
      return <S.p>{children}</S.p>
    default:
      return <S.span>{children}</S.span>
  }
}

export default Text
