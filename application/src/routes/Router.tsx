import React from 'react'
import { useSelector } from 'react-redux'
import Error from 'screens/Error'
import Community from 'screens/Community'
import Landing from 'screens/Landing'
import SignIn from 'screens/SignIn'
import Register from 'screens/Register'
import useInitApplication from 'utils/hooks/useInitApplication'

function Router() {
  useInitApplication()
  const { screen } = useSelector(s => s.app)

  switch (screen) {
    case 'landing':
      return <Landing />
    case 'sign-in':
      return <SignIn />
    case 'register':
      return <Register />
    case 'community':
      return <Community />
    default:
      return <Error />
  }
}

export default Router
