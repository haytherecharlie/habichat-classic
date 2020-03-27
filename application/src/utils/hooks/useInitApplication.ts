import { useEffect } from 'react'
import { Platform, Keyboard } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { loadAsync } from 'expo-font'
import { auth } from 'services/firebase'
import cocogoose from 'assets/fonts/cocogoose.otf'
import helvetica from 'assets/fonts/helvetica-regular.otf'
import * as A from 'services/redux/actions'

const usePreparation = () => {
  console.disableYellowBox = true
  const dispatch = useDispatch()
  const { profile } = useSelector(s => s.user)

  const keyboardUp = () => {
    Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow', () => {
      return dispatch({ type: A.KEYBOARD_UP, status: true })
    })
    Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardDidHide' : 'keyboardDidHide', () => {
      return dispatch({ type: A.KEYBOARD_UP, status: false })
    })
  }

  const loadFonts = async () => {
    try {
      await Promise.all([loadAsync({ cocogoose }), loadAsync({ helvetica })])
      return dispatch({ type: A.INITIALIZATION, message: 'Checking Auth State.' })
    } catch (err) {
      return alert('THERE WAS A CRITICAL ERROR!')
    }
  }

  const checkAuthState = () => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        const userData = user.providerData[0]
        const { displayName } = userData
        const { last, first, avatar } = profile
        if (displayName === null) {
          const updatedProfile = { displayName: `${last}, ${first}`, photoURL: avatar }
          await user.updateProfile(updatedProfile)
          dispatch({ type: A.SIGN_IN, profile: { ...profile, ...updatedProfile } })
        }
        return dispatch({ type: A.SIGN_IN, profile: user })
      }
      return dispatch({ type: A.SIGN_OUT, profile: user })
    })
  }

  useEffect(() => {
    Promise.all([keyboardUp(), loadFonts(), checkAuthState()])
  }, [])
}

export default usePreparation
