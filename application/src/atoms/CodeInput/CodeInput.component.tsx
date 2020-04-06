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
        .catch(err => console.log(err.code))
    }
  }, [code])

  return (
    <S.CodeInput>
      <Text size="label">Enter Verification Code</Text>
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
      {code.error && <S.ErrorText>{code.error}</S.ErrorText>}
    </S.CodeInput>
  )
}

export default CodeInput
