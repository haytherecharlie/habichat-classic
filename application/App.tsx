import 'config/base64'
import React from 'react'
import AppLayout from 'layouts/AppLayout'
import Router from 'routes/Router'

const App = () => {
  return (
    <AppLayout>
      <Router />
    </AppLayout>
  )
}

export default App
