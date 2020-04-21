import React, { forwardRef } from 'react'
import Text from 'atoms/Text'
import translate from 'language/translate'
import * as S from './NameInput.style'

const NameInput = (props, ref) => {
  const { error, title, placeholder } = props

  const defaultProps = {
    autoCapitalize: 'words',
    autoCompleteType: 'name',
    autoCorrect: false,
    autoFocus: false,
    blurOnSubmit: false,
    clearButtonMode: 'never',
    multiline: false,
    placeholderTextColor: `#999`,
    returnKeyType: 'next',
    spellCheck: false,
    ref,
    ...props,
    placeholder: translate.t(placeholder)
  }

  return (
    <S.NameInput>
      <Text type="label" style={{ marginLeft: 20 }} text={title} />
      <S.Input {...defaultProps} />
      {error && <Text type="error" text={error} style={{ marginBottom: -10 }} />}
    </S.NameInput>
  )
}

export default forwardRef(NameInput)
