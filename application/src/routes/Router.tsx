import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RouterLayout from 'layouts/RouterLayout'
import Home from 'screens/Home'
import Splash from 'screens/Splash'
import Register from 'screens/Register'
import useHeaderOptions from 'utils/hooks/useHeaderOptions'
import useKeyboardUp from 'utils/hooks/useKeyboardUp'
import useAuthentication from 'utils/hooks/useAuthentication'
import useUniversalInitialization from 'utils/hooks/useUniversalInitialization'

function Router() {
  useKeyboardUp()
  const authState = useAuthentication()
  const initApp = useUniversalInitialization()
  const Stack = createStackNavigator()

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

  console.log(`${authState} | ${initApp}`)
  switch (`${authState} | ${initApp}`) {
    case 'success | success':
      return <Authenticated />
    case 'failed | success':
      return <Unauthenticated />
    default:
      return <Splash />
  }
}

export default Router
