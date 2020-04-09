import React from 'react'
import store from 'services/redux'
import { Provider } from 'react-redux'
import { AppearanceProvider } from 'react-native-appearance'
import * as S from './AppLayout.style'

const AppLayout = ({ children }) => {
  return (
    <AppearanceProvider>
      <Provider store={store}>
        <S.AppLayout>{children}</S.AppLayout>
      </Provider>
    </AppearanceProvider>
  )
}

export default AppLayout
