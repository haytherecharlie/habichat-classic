import 'config/base64'
import React from 'react'
import { Provider } from 'react-redux'
import { AppearanceProvider } from 'react-native-appearance'
import Router from './src/routes/Router'
import store from './src/services/redux'

const App = () => {
  return (
    <AppearanceProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </AppearanceProvider>
  )
}

export default App
