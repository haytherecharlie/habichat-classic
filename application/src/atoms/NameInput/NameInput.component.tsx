import React, { forwardRef } from 'react'
import Text from 'atoms/Text'
import * as S from './NameInput.style'

const NameInput = (props, ref) => {
  const error = props.error
  const title = (props.title || '').toUpperCase()

  const defaultProps = {
    ref,
    autoFocus: false,
    clearButtonMode: 'never',
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
    <S.NameInput>
      <Text {...S.Title}>{title}</Text>
      <S.Input {...defaultProps} />
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.NameInput>
  )
}

export default forwardRef(NameInput)
