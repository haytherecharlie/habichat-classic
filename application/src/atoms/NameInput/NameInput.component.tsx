import React, { forwardRef } from 'react'
import Text from 'atoms/Text'
import * as S from './NameInput.style'

const NameInput = (props, ref) => {
  const error = props.error
  const title = (props.title || '').toUpperCase()

  const defaultProps = {
    autoCapitalize: 'words',
    autoCompleteType: 'name',
    autoCorrect: true,
    autoFocus: false,
    blurOnSubmit: false,
    clearButtonMode: 'never',
    multiline: false,
    placeholderTextColor: `#999`,
    returnKeyType: 'next',
    spellCheck: false,
    ref,
    ...props
  }

  return (
    <S.NameInput>
      <Text size="label" style={{ marginLeft: 20 }}>{title}</Text>
      <S.Input {...defaultProps} />
      {error && <Text size="error">{error}</Text>}
    </S.NameInput>
  )
}

export default forwardRef(NameInput)
