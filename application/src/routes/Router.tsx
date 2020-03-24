import React from 'react'
import { useSelector } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import RouterLayout from 'layouts/RouterLayout'
import Home from 'screens/Home'
import Splash from 'screens/Splash'
import Register from 'screens/Register'
import useHeaderOptions from 'utils/hooks/useHeaderOptions'
import useKeyboardUp from 'utils/hooks/useKeyboardUp'
import useAuthentication from 'utils/hooks/useAuthentication'
import useInitializationUniversal from 'utils/hooks/useInitializationUniversal'

function Router() {
  useKeyboardUp()
  useAuthentication()
  const { authentication } = useSelector(s => s.user)
  const Stack = createStackNavigator()
  const initApp = useInitializationUniversal()

  const Authenticated = () => (
    <RouterLayout>
      <Stack.Navigator>
        <Stack.Screen name="Community" component={Home} options={useHeaderOptions('visible')} />
      </Stack.Navigator>
    </RouterLayout>
  )

  const Unauthenticated = () => (
    <RouterLayout>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} options={useHeaderOptions('register')} />
      </Stack.Navigator>
    </RouterLayout>
  )

  console.log(`${authentication} | ${initApp}`)
  switch (`${authentication} | ${initApp}`) {
    case 'success | success':
      console.log('authenticated')
      return <Authenticated />
    case 'failed | success':
      console.log('not logged in')
      return <Unauthenticated />
    default:
      return <Splash />
  }
}

export default Router
