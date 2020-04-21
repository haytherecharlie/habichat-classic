import { useEffect } from 'react'
import { Keyboard } from 'react-native'
import { useDispatch } from 'react-redux'
import { SplashScreen } from 'expo'
import { useFonts } from '@use-expo/font'
import { kShow, kHide } from 'utils/helpers'
import { auth } from 'services/firebase'
import * as A from 'services/redux/actions'

const usePrecaching = () => {
  console.disableYellowBox = true
  const dispatch = useDispatch()
  const [fontsLoaded] = useFonts({
    cocogoose: require('../../assets/fonts/cocogoose.otf'),
    'helvetica-regular': require('../../assets/fonts/helvetica-regular.otf'),
    'helvetica-bold': require('../../assets/fonts/helvetica-bold.otf')
  })

  const keyboardUp = () => {
    try {
      Keyboard.addListener(kShow, () => dispatch({ type: A.KEYBOARD_UP, status: true }))
      Keyboard.addListener(kHide, () => dispatch({ type: A.KEYBOARD_UP, status: false }))
      return true
    } catch (err) {
      return false
    }
  }

  const checkAuthState = () => {
    auth().onAuthStateChanged(async user => {
      if (user) {
        const { uid, phoneNumber, photoURL, displayName } = user
        if (displayName !== null && photoURL !== null) {
          return dispatch({ type: A.SIGN_IN, value: user })
        }
        return dispatch({ type: A.SIGN_IN, value: { uid, phoneNumber } })
      }
      return dispatch({ type: A.SIGN_OUT })
    })
  }

  useEffect(() => {
    if (fontsLoaded === true) Promise.all([keyboardUp(), checkAuthState()]).then(SplashScreen.hide)
  }, [fontsLoaded])

  return fontsLoaded
}

export default usePrecaching
