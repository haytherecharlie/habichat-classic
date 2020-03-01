import 'utils/helpers/base64'
import React from 'react'
import { Provider } from 'react-redux'
import { KeyboardAvoidingView } from 'react-native'
import { AppearanceProvider } from 'react-native-appearance'
import usePreloading from 'utils/hooks/usePreloading'
import store from 'services/redux'
import Router from 'routes/Router'

const App = () => {
  const preloaded = usePreloading()
  return (
    <AppearanceProvider>
      <Provider store={store}>
        <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
          {preloaded && <Router />}
        </KeyboardAvoidingView>
      </Provider>
    </AppearanceProvider>
  )
}

export default App
