import React from 'react'
import { useSelector } from 'react-redux'
import Community from 'screens/Community'
import Error from 'screens/Error'
import InitializeCommunity from 'screens/InitializeCommunity'
import Landing from 'screens/Landing'
import CreateProfile from 'screens/CreateProfile'
import SignInPhone from 'screens/SignInPhone'
import useAppInitialization from 'utils/hooks/useAppInitialization'

function Router() {
  useAppInitialization()
  const { screen } = useSelector(s => s.app)

  switch (screen) {
    case 'community':
      return <Community />
    case 'initialize-community':
      return <InitializeCommunity />
    case 'landing':
      return <Landing />
    case 'sign-in':
      return <SignInPhone />
    case 'create-profile':
      return <CreateProfile />
    default:
      return <Error />
  }
}

export default Router
