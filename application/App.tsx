import './src/utils/helpers/base64'
import React from 'react'
import { Provider } from 'react-redux'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { AppearanceProvider } from 'react-native-appearance'
import usePreloading from './src/utils/hooks/usePreloading'
import store from './src/services/redux'
import Router from './src/routes/Router'

const App = () => {
  console.disableYellowBox = true
  const preloaded = usePreloading()
  const props = Platform.OS === 'ios' ? { behavior: 'padding' } : {}

  return (
    <AppearanceProvider>
      <Provider store={store}>
        <KeyboardAvoidingView {...props} style={{ flex: 1 }}>
          {preloaded && <Router />}
        </KeyboardAvoidingView>
      </Provider>
    </AppearanceProvider>
  )
}

export default App
