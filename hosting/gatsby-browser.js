import 'animate.css'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import 'prismjs/themes/prism-tomorrow.css'
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/services/redux'

export const wrapRootElement = ({ element }) => <Provider store={store}>{element}</Provider>
