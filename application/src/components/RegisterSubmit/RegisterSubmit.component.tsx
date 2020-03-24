import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CenterLayout from 'layouts/CenterLayout'
import Spinner from 'atoms/Spinner'
import Text from 'atoms/Text'
import { auth, db } from 'services/firebase'
import * as A from 'services/redux/actions'

const RegisterSubmit = ({ state, dispatch }) => {
  const rDispatch = useDispatch()
  const signIn = async () => {
    try {
      const doc = await db.doc('application/avatars').get()
      const data = doc.data()
      const avarr = Object.values(data)
      const avatar = avarr[Math.floor(Math.random() * (avarr.length - 1 - 0 + 1) + 0)]
      await auth.createUserWithEmailAndPassword(state.email.value, state.pass.value)
      const user = auth.currentUser
      await user.updateProfile({
        displayName: `${state.last.value}, ${state.first.value}`,
        photoURL: avatar
      })
      return rDispatch({ type: A.USER_SIGN_IN })
    } catch (err) {
      if (err.code === 'auth/weak-password') return dispatch({ type: 'weak-password' })
      if (err.code === 'auth/email-already-in-use') return dispatch({ type: 'email-taken' })
      console.log(err)
    }
  }

  useEffect(() => {
    signIn()
  }, [])

  return (
    <CenterLayout>
      <Spinner />
      <Text>Registering New User...</Text>
    </CenterLayout>
  )
}

export default RegisterSubmit
