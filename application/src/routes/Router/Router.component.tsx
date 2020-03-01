import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Logo from 'atoms/Logo'
import ProfileCircle from 'atoms/ProfileCircle'
import theme from 'assets/styles/theme.style'
import Home from 'screens/Home'

function Router() {
  const Stack = createStackNavigator()
  const Drawer = createDrawerNavigator()

  const CommunityStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Habichat"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: theme.BACKGROUND_COLOR,
            shadowOpacity: 0
          },
          headerLeftContainerStyle: { paddingLeft: theme.DISPLAY_PADDING },
          headerRightContainerStyle: { paddingRight: theme.DISPLAY_PADDING },
          headerTitle: '',
          headerLeft: () => <Logo />,
          headerRight: () => <ProfileCircle />
        }}
      />
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
