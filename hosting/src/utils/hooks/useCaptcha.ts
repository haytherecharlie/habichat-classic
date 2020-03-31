import { useEffect } from "react"
import { auth } from 'services/firebase'

const useCaptcha = () => {
  const handleCaptchaSuccess = async () => {
    if (typeof window !== "undefined") {
      try {
        const confirmation = await auth().signInWithPhoneNumber(window.phone, window.captcha)
        window.ReactNativeWebView.postMessage(JSON.stringify({ code: 'txtMsgSent', id: confirmation.verificationId }))
      }catch(err) {
        window.ReactNativeWebView.postMessage(JSON.stringify({ code: 'txtMsgError', err }))
      }
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.captcha = new auth.RecaptchaVerifier("captcha", { size: "normal", callback: handleCaptchaSuccess })
      window.triggerCaptcha = async (phone) => {
        window.phone = phone
        await window.captcha.render()
        return window.captcha.verify()
      }
    }
  }, [])
}

export default useCaptcha
