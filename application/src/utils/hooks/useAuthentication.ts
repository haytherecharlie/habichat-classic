import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from 'services/firebase'
import * as A from 'services/redux/actions'

const useAuthentication = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const authListener = auth.onAuthStateChanged(user => {
      return !user ? dispatch({ type: A.USER_SIGN_OUT }) : dispatch({ type: A.USER_SIGN_IN, value: user.providerData })
    })
    return () => authListener()
  }, [])
}

export default useAuthentication
