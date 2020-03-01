import React, { useRef } from 'react'
import * as S from './InputMessageText.style'

const InputMessageText = ({ text, changeText }) => {
  return <S.Input multiline={true} numberOfLines={1} value={text || ''} onChangeText={t => changeText(t)} placeholder="Say something..." placeholderTextColor="#555"  />
}

export default InputMessageText
