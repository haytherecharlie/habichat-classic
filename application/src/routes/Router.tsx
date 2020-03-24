import React from 'react'
import { useSelector } from 'react-redux'
import Community from 'screens/Community'
import Landing from 'screens/Landing'
import Register from 'screens/Register'
import Splash from 'screens/Splash'
import useInitialization from 'utils/hooks/useInitialization'

function Router() {
  useInitialization()
  const { screen } = useSelector(s => s.app)

  switch (screen) {
    case 'landing':
      return <Landing />
    case 'register':
      return <Register />
    case 'community':
      return <Community />
    default:
      return <Splash />
  }
}

export default Router
