import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import useKeyboardUp from 'utils/hooks/useKeyboardUp'
import Logo from 'atoms/Logo'
import ProfileCircle from 'atoms/ProfileCircle'
import theme from 'assets/styles/theme.style'
import Initialize from 'screens/Initialize'
import Home from 'screens/Home'

function Router() {
  useKeyboardUp()
  const Stack = createStackNavigator()
  const { authenticated, initialized } = useSelector(s => s.application)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {initialized ? (
          <Stack.Screen
            name="Community"
            component={Home}
            options={{
              headerStyle: { backgroundColor: '#FFF', shadowOpacity: 0, elevation: 0 },
              headerLeftContainerStyle: { paddingLeft: theme.DISPLAY_PADDING },
              headerRightContainerStyle: { paddingRight: theme.DISPLAY_PADDING },
              headerTitle: '',
              headerLeft: () => <Logo />,
              headerRight: () => <ProfileCircle />
            }}
          />
        ) : (
          <Stack.Screen name="Initialize" component={Initialize} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
