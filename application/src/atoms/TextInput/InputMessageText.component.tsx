import React, { useEffect } from 'react'
import * as S from './InputMessageText.style'

const InputMessageText = props => {
  const defaultProps = {
    multiline: true,
    numberOfLines: 1,
    value: '',
    placeholder: 'Say something...',
    placeholderTextColor: `#999`,
    ...props
  }

  return <S.Input {...defaultProps} />
}

export default InputMessageText
