import React from 'react'
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import * as S from './RouterLayout.style'

const RouterLayout = ({ children }) => {
  const behavior = Platform.OS === 'ios' ? { behavior: 'padding' } : {}

  return (
    <S.RouterLayout {...behavior}>
      <NavigationContainer>{children}</NavigationContainer>
    </S.RouterLayout>
  )
}

export default RouterLayout
