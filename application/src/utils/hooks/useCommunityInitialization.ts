import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as A from 'services/redux/actions'

const useInitialization = () => {
  const dispatch = useDispatch()
  const { displayName, photoURL } = useSelector(s => s.user.account)

  useEffect(() => {
    if (!displayName || !photoURL) {
      dispatch({ type: A.NAVIGATE, screen: 'register' })
    } else {
      dispatch({ type: A.NAVIGATE, screen: 'community' })
    }
  })
}

export default useInitialization
