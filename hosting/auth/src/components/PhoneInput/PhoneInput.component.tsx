import React from 'react'
import PhoneNumberInput from 'react-phone-input-2'
import * as S from './PhoneInput.style'

const PhoneInput = ({ darkMode, value, onChange }) => {
  return (
    <S.PhoneInput darkMode={darkMode}>
      <S.PhoneLabel darkMode={darkMode}>Phone Number</S.PhoneLabel>
      <PhoneNumberInput containerClass="container" inputClass="input" country={'ca'} onlyCountries={['ca']} value={value} onChange={onChange} />
    </S.PhoneInput>
  )
}

export default PhoneInput
