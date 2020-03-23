import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import useAuthentication from 'utils/hooks/useAuthentication'
import useKeyboardUp from 'utils/hooks/useKeyboardUp'
import Header from 'components/Header'
import theme from 'assets/styles/theme.style'
import Initialize from 'screens/Initialize'
import Register from 'screens/Register'
import Home from 'screens/Home'

function Router() {
  useKeyboardUp()
  useAuthentication()
  const Stack = createStackNavigator()
  const { authenticated } = useSelector(s => s.application)

  const headerOptions = {
    headerStyle: { backgroundColor: theme.FOREGROUND_COLOR, shadowOpacity: 0, elevation: 0 },
    headerTitle: '',
    headerLeft: () => <Header.Left />,
    headerRight: () => <Header.Right />
  }

  const Authenticated = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Initialize" component={Initialize} options={{ headerShown: false }} />
        <Stack.Screen name="Community" component={Home} options={headerOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  )

  const Unauthenticated = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )

  return authenticated ? <Authenticated /> : <Unauthenticated />
}

export default Router
