import React from 'react'
import { useSelector } from 'react-redux'
import Community from 'screens/Community'
import Error from 'screens/Error'
import Landing from 'screens/Landing'
import CreateProfile from 'screens/CreateProfile'
import SignInPhone from 'screens/SignInPhone'
import useInitialization from 'utils/hooks/useInitialization'

function Router() {
  const loaded = useInitialization()
  const { screen } = useSelector(s => s.app)
  if (!loaded) return null

  switch (screen) {
    case 'community':
      return <Community />
    case 'landing':
      return <Landing />
    case 'sign-in':
      return <SignInPhone />
    case 'create-profile':
      return <CreateProfile />
    case 'error':
      return <Error />
    default:
      return null
  }
}

export default Router
