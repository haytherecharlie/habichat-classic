import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Logo from 'atoms/Logo'
import ProfileCircle from 'atoms/ProfileCircle'
import theme from 'assets/styles/theme.style'
import Initialize from 'screens/Initialize'
import Home from 'screens/Home'

function Router() {
  const dispatch = useDispatch()
  const Stack = createStackNavigator()
  const Drawer = createDrawerNavigator()
  const { authenticated, initialized } = useSelector(s => s.application)

  const CommunityStack = () => (
    <Stack.Navigator>
      {initialized ? (
        <Stack.Screen
          name="Messages"
          component={Home}
          options={{
            headerStyle: { backgroundColor: theme.BACKGROUND_COLOR, shadowOpacity: 0, elevation: 0 },
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
  )

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Community" component={CommunityStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Router
