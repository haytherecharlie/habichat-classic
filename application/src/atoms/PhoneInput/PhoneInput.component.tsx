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
      <Text type="label" style={{ marginLeft: 15 }} text="phone-number" />
      <S.InputBorder valid={phone.valid}>
        <PhoneNumberMask
          placeholder="(XXX) XXX-XXXX"
          autoFocus
          value={phone.value}
          onNumberChange={value => update({ type: 'phone', value: value.replace(/\D/g, '') })}
          {...S.PhoneNumberMask}
          editable={phone.valid !== 'valid'}
        />
        <S.CountryCodeWrapper>
          <S.CountryCode>🇨🇦 +1</S.CountryCode>
        </S.CountryCodeWrapper>
      </S.InputBorder>
      {phone.error && <Text type="error" text={phone.error} />}
    </S.PhoneInput>
  )
}

export default PhoneInput
