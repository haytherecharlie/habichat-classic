import 'animate.css'
import 'prismjs/themes/prism-tomorrow.css'
import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './src/services/redux'
import { PersistGate } from 'redux-persist/integration/react'

if (typeof window !== 'undefined') {
  require('firebase/auth')
  require('firebase/firestore')
  require('firebase/analytics')
}

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {element}
    </PersistGate>
  </Provider>
)
