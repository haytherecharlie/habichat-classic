import { useEffect } from 'react'
import { Platform, Keyboard } from 'react-native'
import { useDispatch } from 'react-redux'
import { loadAsync } from 'expo-font'
import { auth } from 'services/firebase'
import cocogoose from 'assets/fonts/cocogoose.otf'
import helvetica from 'assets/fonts/helvetica-regular.otf'
import * as A from 'services/redux/actions'

const useInitialization = () => {
  console.disableYellowBox = true
  const dispatch = useDispatch()

  const keyboardUp = () => {
    Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow', () => {
      console.log('keyboard up listener.')
      return dispatch({ type: A.KEYBOARD_UP, status: true })
    })
    Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardDidHide' : 'keyboardDidHide', () => {
      console.log('keyboard down listener.')
      return dispatch({ type: A.KEYBOARD_UP, status: false })
    })
  }

  const loadFonts = async () => {
    try {
      await Promise.all([loadAsync({ cocogoose }), loadAsync({ helvetica })])
      console.log('fonts loaded')
      return dispatch({ type: A.INITIALIZATION, message: 'Checking Auth State.' })
    } catch (err) {
      return alert('THERE WAS A CRITICAL ERROR!')
    }
  }

  const checkAuthState = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log('signedIn')
        return dispatch({ type: A.SIGN_IN, profile: user })
      }
      console.log('signOut')
      return dispatch({ type: A.SIGN_OUT, profile: user })
    })
  }

  useEffect(() => {
    Promise.all([keyboardUp(), loadFonts(), checkAuthState()])
  }, [])
}

export default useInitialization
