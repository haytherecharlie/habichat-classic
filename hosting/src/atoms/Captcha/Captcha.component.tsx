import React, { useEffect } from 'react'
import { auth } from 'services/firebase'
import * as S from './Captcha.style'

const Captcha = () => {
  useEffect(() => {
    window.captcha = new auth.RecaptchaVerifier('captcha', {
      size: 'normal',
      callback: async () => {
        try {
          const confirmation = await auth().signInWithPhoneNumber(window.phone, window.captcha)
          window.ReactNativeWebView.postMessage(JSON.stringify({ code: 'txtMsgSent', id: confirmation.verificationId }))
        } catch (err) {
          window.ReactNativeWebView.postMessage(JSON.stringify({ code: 'txtMsgError', err }))
        }
      }
    })

    window.triggerCaptcha = async phone => {
      window.phone = phone
      await window.captcha.render()
      return window.captcha.verify()
    }
  }, [])

  return <S.Captcha id="captcha" />
}

export default Captcha
