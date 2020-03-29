import React, { useEffect, useState, useRef } from 'react'
import useFirebase from '../utils/useFirebase'

const SignIn = () => {
  const fb = useFirebase()
  const phoneRef = useRef()
  const [phone, setPhone] = useState('+14388805966')
  const [verifier, setVerifier] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (fb) setVerifier(new fb.auth.RecaptchaVerifier('sign-in-button', { size: 'invisible' }))
  }, [fb])

  const onClick = async () => {
    try {
      const result = await fb.auth().signInWithPhoneNumber(phone, verifier)
      const { user } = await result.confirm('123123')
      setUser(user)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div style={{ height: 100, width: 100 }}>
      <input type="phone" ref={phoneRef} value={phone} onChange={setPhone} />
      <button id="sign-in-button" onClick={onClick}>
        Sign In
      </button>
      {user && <div>{JSON.stringify(user)}</div>}
    </div>
  )
}

export default SignIn
