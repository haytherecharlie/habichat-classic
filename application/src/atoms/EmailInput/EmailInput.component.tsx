import React, { forwardRef } from 'react'
import Text from 'atoms/Text'
import translate from 'language/translate'
import * as S from './EmailInput.style'

const EmailInput = (props, ref) => {
  const { onSubmitEditing, placeholder, validation } = props

  const defaultProps = {
    autoCapitalize: 'none',
    autoCompleteType: 'email',
    autoCorrect: true,
    autoFocus: false,
    blurOnSubmit: false,
    clearButtonMode: 'never',
    keyboardType: 'email-address',
    multiline: false,
    placeholderTextColor: `#999`,
    returnKeyType: 'send',
    spellCheck: false,
    textContentType: 'emailAddress',
    ref,
    ...props,
    placeholder: translate.t(placeholder)
  }

  return (
    <S.EmailInput>
      <S.Input {...defaultProps} />
      <S.Button onPress={onSubmitEditing} disabled={validation !== 'valid'}>
        <Text type="h3" text="join" />
      </S.Button>
    </S.EmailInput>
  )
}

export default forwardRef(EmailInput)
