import 'config/base64'
import React from 'react'
import { SplashScreen } from 'expo'
import AppLayout from 'layouts/AppLayout'
import Router from 'routes/Router'

const App = () => {
  SplashScreen.preventAutoHide()
  return (
    <AppLayout>
      <Router />
    </AppLayout>
  )
}

export default App
