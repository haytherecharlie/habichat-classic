import React from 'react'
import types from 'prop-types'
import * as S from './Text.style'

const Text = ({ type, children }) => {
  switch (type) {
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

Text.propTypes = {
  type: types.oneOf(['h1', 'h2', 'h3', 'p'])
}

export default Text
