import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from 'screens/Home'

function Router() {
  const { Navigator, Screen } = createStackNavigator()
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Router
