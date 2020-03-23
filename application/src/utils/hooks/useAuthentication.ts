import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from 'services/firebase'
import * as A from 'services/redux/actions'

const useAuthentication = () => {
  const dispatch = useDispatch()
  const [currentUser, setCurrentUser] = useState(undefined)
  const [authState, setAuthState] = useState('pending')

  useEffect(() => {
    auth.signOut()
    const authListener = auth.onAuthStateChanged(user => {
      if (user !== currentUser) {
        setCurrentUser(user)
        if (user) {
          dispatch({ type: A.USER_SIGN_IN, value: user })
          return setAuthState('success')
        }
        return setAuthState('failed')
      }
    })
    return () => authListener()
  }, [])

  return authState
}

export default useAuthentication
