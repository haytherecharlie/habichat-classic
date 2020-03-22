import React, { forwardRef } from 'react'
import * as S from './InputMessageText.style'

const InputMessageText = forwardRef((props, ref) => {
  const defaultProps = {
    ref,
    multiline: true,
    numberOfLines: 1,
    value: '',
    placeholder: 'Say something...',
    placeholderTextColor: `#999`,
    ...props
  }

  return <S.Input {...defaultProps} />
})

export default InputMessageText
