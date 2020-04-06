import React from 'react'
import { useSelector } from 'react-redux'
import Community from 'screens/Community'
import Error from 'screens/Error'
import Initialization from 'screens/Initialization'
import Landing from 'screens/Landing'
import Register from 'screens/Register'
import SignIn from 'screens/SignIn'
import usePrecaching from 'utils/hooks/usePrecaching'

function Router() {
  usePrecaching()
  const { screen } = useSelector(s => s.app)

  switch (screen) {
    case 'community':
      return <Community />
    case 'initialization':
      return <Initialization />
    case 'landing':
      return <Landing />
    case 'sign-in':
      return <SignIn />
    case 'register':
      return <Register />
    default:
      return <Error />
  }
}

export default Router
