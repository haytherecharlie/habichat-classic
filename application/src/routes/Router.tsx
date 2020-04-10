import React from 'react'
import { useSelector } from 'react-redux'
import Community from 'screens/Community'
import Error from 'screens/Error'
import InitializeCommunity from 'screens/InitializeCommunity'
import Landing from 'screens/Landing'
import CityComingSoon from 'screens/CityComingSoon'
import CreateProfile from 'screens/CreateProfile'
import SignInPhone from 'screens/SignInPhone'
import useAppInitialization from 'utils/hooks/useAppInitialization'

function Router() {
  const loaded = useAppInitialization()
  const { screen } = useSelector(s => s.app)
  if (!loaded) return null

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
    case 'city-coming-soon':
      return <CityComingSoon />
    case 'error':
      return <Error />
    default:
      return null
  }
}

export default Router
