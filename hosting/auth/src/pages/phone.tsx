import React, { useEffect, useState } from 'react'
import PageLayout from 'src/layouts/PageLayout'
import PhoneInput from 'src/components/PhoneInput'
import PillButton from 'src/components/PillButton'
import useFirebase from '../utils/useFirebase'

const SignIn = () => {
  const fb = useFirebase()
  const [darkMode, setDarkMode] = useState(false)
  const [token, setToken] = useState(null)
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDarkMode(new URLSearchParams(window.location.search).get('dm') === 'true')
    }
  }, [])

  useEffect(() => {
    if (fb && token === null) {
      const captcha = new fb.auth.RecaptchaVerifier('captcha', {
        size: 'normal',
        callback: token => setToken(token)
      })
      captcha.render().then(() => captcha.verify())
    }
  }, [fb])

  const onClick = async () => {
    try {
      if (typeof window !== 'undefined' && token && phone) {
        window.ReactNativeWebView.postMessage(JSON.stringify({ phone, token }))
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <PageLayout darkMode={darkMode}>
      <PhoneInput value={phone} onChange={setPhone} darkMode={darkMode} />
      <div id="captcha" />
      <PillButton darkMode={darkMode} onClick={onClick} />
    </PageLayout>
  )
}

export default SignIn
