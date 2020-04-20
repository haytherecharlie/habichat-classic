import React from 'react'
import { SplashScreen } from 'expo'
import { decode, encode } from 'base-64'
import AppLayout from 'layouts/AppLayout'
import Router from 'routes/Router'

const App = () => {
  SplashScreen.preventAutoHide()
  if (!global.btoa || !global.atob) {
    global.btoa = encode
    global.atob = decode
  }

  return (
    <AppLayout>
      <Router />
    </AppLayout>
  )
}

export default App
