import React, { useState, useEffect } from 'react'
import { auth } from 'services/firebase'
import Captcha from 'atoms/Captcha'
import PhoneInput from 'atoms/PhoneInput'
import CodeInput from 'atoms/CodeInput'
import PillButton from 'atoms/PillButton'
import * as S from './PhoneAuthForm.style'

const PhoneAuthForm = () => {
  const [step, setStep] = useState('phone')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [token, setToken] = useState('')
  const [result, setResult] = useState(null)

  const sendPhoneCode = async () => {
    try {
      const verify = { type: 'recaptcha', verify: () => Promise.resolve(token) }
      setResult(await auth.signInWithPhoneNumber(phone, verify))
      return setStep('code')
    } catch (err) {
      console.log(err)
    }
  }

  const loginUser = async () => {
    if (code.length === 6) {
      try {
        await result.confirm(code)
      } catch (err) {
        console.log(err)
      }
    }
  }

  useEffect(() => {
    if (phone.length === 14 && token.length > 0 && result === null) sendPhoneCode()
  }, [phone, token])

  if (step === 'phone')
    return (
      <S.PhoneAuthForm>
        <PhoneInput value={phone} onNumberChange={setPhone} />
        <Captcha setToken={setToken} />
      </S.PhoneAuthForm>
    )
  if (step === 'code')
    return (
      <S.PhoneAuthForm>
        <CodeInput value={code} onTextChange={setCode} />
        <PillButton onPress={loginUser}>VERIFY</PillButton>
      </S.PhoneAuthForm>
    )
}

export default PhoneAuthForm
