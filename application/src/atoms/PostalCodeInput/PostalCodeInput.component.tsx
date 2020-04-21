import React, { forwardRef } from 'react'
import Text from 'atoms/Text'
import translate from 'language/translate'
import * as S from './PostalCodeInput.style'

const PostalCodeInput = (props, ref) => {
  const { error, title, placeholder } = props

  const defaultProps = {
    autoCapitalize: 'characters',
    autoCompleteType: 'postal-code',
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
    <S.PostalCodeInput>
      <Text type="h3" text={title} style={{ marginLeft: 20 }} />
      <S.Input {...defaultProps} />
      {error && <Text type="error" text={error} />}
    </S.PostalCodeInput>
  )
}

export default forwardRef(PostalCodeInput)
