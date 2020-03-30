import React from 'react'
import PhoneNumberMask from 'rn-phone-number-mask'
import Text from 'atoms/Text'
import theme from 'assets/theme'
import * as S from './PhoneInput.style'

const PhoneInput = ({ value, onNumberChange }) => {
  return (
    <S.PhoneInput>
      <Text {...S.Label}>Phone Number</Text>
      <PhoneNumberMask
        containerStyle={S.containerStyle}
        style={S.inputStyle}
        placeholder="(XXX) XXX-XXXX"
        placeholderTextColor={theme.INPUT_PLACEHOLDER}
        autoFocus
        value={value}
        onNumberChange={num => onNumberChange(num)}
      />
    </S.PhoneInput>
  )
}

export default PhoneInput
