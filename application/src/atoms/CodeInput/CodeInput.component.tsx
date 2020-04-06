import React, { useEffect } from 'react'
import PinCode from 'react-native-smooth-pincode-input'
import Text from 'atoms/Text'
import { auth } from 'services/firebase'
import * as S from './CodeInput.style'

const CodeInput = ({ code, token, update }) => {
  useEffect(() => {
    if (code.valid === 'valid') {
      auth()
        .signInWithCredential(auth.PhoneAuthProvider.credential(token.value, code.value))
        .catch(err => update({ type: err.code }))
    }
  }, [code])

  return (
    <S.CodeInput>
      <Text type="label" text="enter-verification-code" />
      <PinCode
        autoFocus
        cellSize={36}
        codeLength={6}
        restrictToNumbers
        value={code.value}
        onTextChange={code => update({ type: 'code', value: code })}
        placeholder={<S.Dot />}
        {...S.PinCode}
      />
      {code.error && <Text type="error" text={code.error} />}
    </S.CodeInput>
  )
}

export default CodeInput
