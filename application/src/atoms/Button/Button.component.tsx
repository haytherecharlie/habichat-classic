import React from 'react'
import * as S from './Button.style'

const Button = ({ onPress, children }) => {
  return (
    <S.Button onPress={onPress}>
      <S.Title>{children}</S.Title>
    </S.Button>
  )
}

export default Button
