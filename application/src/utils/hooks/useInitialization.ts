import { useEffect } from 'react'
import { Keyboard } from 'react-native'
import { useDispatch } from 'react-redux'
import { SplashScreen } from 'expo'
import { useFonts } from '@use-expo/font'
import authStateChanged from 'services/firebase/auth/stateChanged'
import { kShow, kHide } from 'utils/helpers'
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
    Keyboard.addListener(kShow, () => dispatch({ type: A.KEYBOARD_UP, status: true }))
    Keyboard.addListener(kHide, () => dispatch({ type: A.KEYBOARD_UP, status: false }))
  }

  useEffect(() => {
    if (fontsLoaded === true) Promise.all([keyboardUp(), authStateChanged()]).then(SplashScreen.hide)
  }, [fontsLoaded])

  return fontsLoaded
}

export default usePrecaching
