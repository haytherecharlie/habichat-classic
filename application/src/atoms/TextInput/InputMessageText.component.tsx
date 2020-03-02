import React, { useEffect } from 'react'
import { Keyboard } from 'react-native'
import * as S from './InputMessageText.style'

const InputMessageText = ({ text, changeText, multiline = true, placeholder = 'Say something...', autoFocus = false }) => {
  return (
    <S.Input
      multiline={multiline}
      numberOfLines={1}
      value={text || ''}
      onChangeText={t => changeText(t)}
      placeholder={placeholder}
      placeholderTextColor={'#999'}
      autoFocus={autoFocus}
    />
  )
}

export default InputMessageText
