import { useEffect } from 'react'
import { Keyboard } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { SplashScreen } from 'expo'
import { loadAsync } from 'expo-font'
import { kShow, kHide } from 'utils/helpers'
import { auth } from 'services/firebase'
import cocogoose from 'assets/fonts/cocogoose.otf'
import helvetica from 'assets/fonts/helvetica-regular.otf'
import * as A from 'services/redux/actions'

const useInitApplication = () => {
  console.disableYellowBox = true
  const dispatch = useDispatch()
  const { providerData } = useSelector(s => s.user)

  const keyboardUp = () => {
    try {
      Keyboard.addListener(kShow, () => dispatch({ type: A.KEYBOARD_UP, status: true }))
      Keyboard.addListener(kHide, () => dispatch({ type: A.KEYBOARD_UP, status: false }))
      return true
    } catch (err) {
      return false
    }
  }

  const loadFonts = async () => {
    try {
      await Promise.all([loadAsync({ cocogoose }), loadAsync({ helvetica })])
      return true
    } catch (err) {
      return false
    }
  }

  const checkAuthState = () => {
    auth.onAuthStateChanged(async user => {
      user ? dispatch({ type: A.SIGN_IN, providerData: user.providerData[0] }) : dispatch({ type: A.SIGN_OUT, providerData })
      return SplashScreen.hide()
    })
  }

  useEffect(() => {
    SplashScreen.preventAutoHide()
    Promise.all([keyboardUp(), loadFonts()])
      .then(([kStatus, fStatus]) => (!kStatus || !fStatus ? SplashScreen.hide() : checkAuthState()))
      .catch(err => console.log(err))
  }, [])
}

export default useInitApplication
