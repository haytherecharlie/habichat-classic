import React, { useEffect } from 'react'
import PhoneNumberMask from 'rn-phone-number-mask'
import Text from 'atoms/Text'
import * as S from './PhoneInput.style'

const PhoneInput = ({ phone, webRef, update }) => {
  useEffect(() => {
    if (phone.valid === 'valid') webRef.current.injectJavaScript(`window.triggerCaptcha('+1${phone.value}')`)
  }, [phone])

  return (
    <S.PhoneInput>
      <Text size="label" style={{ marginLeft: 15 }}>Phone Number</Text>
      <S.InputBorder valid={phone.valid}>
        <PhoneNumberMask
          placeholder="(XXX) XXX-XXXX"
          autoFocus
          value={phone.value}
          onNumberChange={value => update({ type: 'phone', value: value.replace(/\D/g, '') })}
          {...S.PhoneNumberMask}
          editable={phone.valid !== 'valid'}
        />
      </S.InputBorder>
      <S.CountryCode>🇨🇦 +1</S.CountryCode>
      {phone.error && <Text size="error">OH NOE</Text>}
    </S.PhoneInput>
  )
}

export default PhoneInput
