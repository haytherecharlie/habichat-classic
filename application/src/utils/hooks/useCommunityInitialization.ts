import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as A from 'services/redux/actions'

const useInitialization = () => {
  const dispatch = useDispatch()
  const { city, community, first, last, photoURL } = useSelector(s => s.user.profile)

  useEffect(() => {
    if (!city || !community || !first || !last || !photoURL) {
      dispatch({ type: A.NAVIGATE, screen: 'create-profile' })
    } else {
      dispatch({ type: A.NAVIGATE, screen: 'community' })
    }
  })
}

export default useInitialization
