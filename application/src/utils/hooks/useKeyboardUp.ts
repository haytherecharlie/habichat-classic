import { useEffect } from 'react'
import { Platform, Keyboard } from 'react-native'
import { useDispatch } from 'react-redux'
import * as A from 'services/redux/actions'

const useKeyboardUp = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const keyboardShown = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow'
    const keyboardHidden = Platform.OS === 'ios' ? 'keyboardDidHide' : 'keyboardDidHide'
    const keyboardDidShowListener = Keyboard.addListener(keyboardShown, () => dispatch({ type: A.KEYBOARD_UP, status: true }))
    const keyboardDidHideListener = Keyboard.addListener(keyboardHidden, () => dispatch({ type: A.KEYBOARD_UP, status: false }))

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])
}

export default useKeyboardUp
