import React, { useState, useRef } from 'react'
import { fb, auth } from 'services/firebase'
import Captcha from 'atoms/Captcha'
import PhoneInput from 'atoms/PhoneInput'
import CodeInput from 'atoms/CodeInput'
import PillButton from 'atoms/PillButton'
import * as S from './PhoneAuthForm.style'

const PhoneAuthForm = () => {
  const webView = useRef(null)
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [step, setStep] = useState('phone')
  const [token, setToken] = useState(null)

  const onMessage = stringData => {
    const data = JSON.parse(stringData)
    if (data.code === 'txtMsgSent') {
      setToken(data.id)
      setStep('code')
    }
  }

  const onCodeChange = code => {
    setCode(code)
    if (code.length === 6) {
      auth.signInWithCredential(fb.auth.PhoneAuthProvider.credential(token, code)).catch(err => console.log(err))
    }
  }

  const onPhoneChange = number => {
    setPhone(number)
    if (number.length === 14) {
      webView.current.injectJavaScript(`window.triggerCaptcha('+1${number.replace(/\D/g, '')}')`)
    }
  }

  if (step === 'phone') {
    return (
      <S.PhoneAuthForm>
        <PhoneInput value={phone} onNumberChange={onPhoneChange} />
        <Captcha webView={webView} onMessage={onMessage} />
      </S.PhoneAuthForm>
    )
  }
  if (step === 'code') {
    return (
      <S.PhoneAuthForm>
        <CodeInput value={code} onTextChange={onCodeChange} />
      </S.PhoneAuthForm>
    )
  }
}

export default PhoneAuthForm
