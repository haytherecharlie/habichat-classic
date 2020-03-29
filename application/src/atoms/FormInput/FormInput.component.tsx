import React, { forwardRef } from 'react'
import Text from 'atoms/Text'
import * as S from './FormInput.style'

const FormInput = (props, ref) => {
  const error = props.error
  const title = (props.title || '').toUpperCase()

  const defaultProps = {
    ref,
    autoFocus: false,
    clearButtonMode: 'off',
    blurOnSubmit: false,
    multiline: false,
    autoCorrect: true,
    spellCheck: false,
    autoCapitalize: 'none',
    autoCompleteType: 'off',
    returnKeyType: 'next',
    placeholderTextColor: `#999`,
    ...props
  }

  return (
    <S.FormInput>
      <Text {...S.Title}>{title}</Text>
      <S.Input {...defaultProps} />
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.FormInput>
  )
}

export default forwardRef(FormInput)
