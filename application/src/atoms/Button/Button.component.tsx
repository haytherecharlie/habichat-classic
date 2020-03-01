import React from 'react'
import * as S from './Button.style'

const Button = ({ onPress }) => {
  return (
    <S.Button onPress={onPress}>
      <S.Title>w</S.Title>
    </S.Button>
  )
}

export default Button
