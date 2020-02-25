import React from 'react'
import types from 'prop-types'
import * as S from './Text.style'

const Text = ({ type, color, children }) => {
  switch (type) {
    case 'h1':
      return <S.h1 color={color}>{children}</S.h1>
    case 'h2':
      return <S.h2 color={color}>{children}</S.h2>
    case 'h3':
      return <S.h3 color={color}>{children}</S.h3>
    case 'p':
      return <S.p color={color}>{children}</S.p>
    default:
      return <S.span color={color}>{children}</S.span>
  }
}

Text.defaultProps = {
  color: 'primary'
}

Text.propTypes = {
  type: types.oneOf(['h1', 'h2', 'h3', 'p']),
  color: types.oneOf(['primary', 'inverse', 'brand', 'inherit'])
}

export default Text
