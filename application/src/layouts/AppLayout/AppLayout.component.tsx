import React from 'react'
import { Platform } from 'react-native'
import { Provider } from 'react-redux'
import { AppearanceProvider } from 'react-native-appearance'
import store from 'services/redux'
import * as S from './AppLayout.style'

const AppLayout = ({ children }) => {
  const props = Platform.OS !== 'android' ? { behavior: 'padding' } : {}
  return (
    <AppearanceProvider>
      <Provider store={store}>
        <S.AppLayout {...props}>{children}</S.AppLayout>
      </Provider>
    </AppearanceProvider>
  )
}

export default AppLayout
