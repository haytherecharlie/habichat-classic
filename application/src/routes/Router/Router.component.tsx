import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import useKeyboardUp from 'utils/hooks/useKeyboardUp'
import Header from 'components/Header'
import theme from 'assets/styles/theme.style'
import Initialize from 'screens/Initialize'
import Register from 'screens/Register'
import Home from 'screens/Home'

function Router() {
  useKeyboardUp()
  const Stack = createStackNavigator()
  const { authenticated, initialized } = useSelector(s => s.application)

  const headerOptions = {
    headerStyle: { backgroundColor: theme.FOREGROUND_COLOR, shadowOpacity: 0, elevation: 0 },
    headerTitle: '',
    headerLeft: () => <Header.Left />,
    headerRight: () => <Header.Right />
  }

  const routes = () => {
    switch (`${authenticated} | ${initialized}`) {
      case `true | true`:
        return <Stack.Screen name="Community" component={Home} options={headerOptions} />
      case `true | false`:
        return <Stack.Screen name="Initialize" component={Initialize} options={{ headerShown: false }} />
      default:
        return <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>{routes()}</Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
