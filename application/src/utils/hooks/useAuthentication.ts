import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from 'services/firebase'
import * as A from 'services/redux/actions'

const useAuthentication = () => {
  const dispatch = useDispatch()
  const { authentication } = useSelector(s => s.user)
  const [currentUser, setCurrentUser] = useState(undefined)

  // auth.signOut()
  useEffect(() => {
    const user = auth.currentUser
    if (user !== currentUser) {
      setCurrentUser(user)
      if (user) {
        dispatch({ type: A.USER_SIGN_IN, value: user })
      } else {
        dispatch({ type: A.USER_SIGN_OUT })
      }
    }
  }, [authentication])
}

export default useAuthentication
