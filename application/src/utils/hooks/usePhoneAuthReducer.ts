import { useReducer, useRef } from 'react'
import { vPhone } from 'utils/helpers'

const useFormValidation = () => {
  const defaultState = {
    code: { value: '', valid: 'pending', error: null },
    phone: { value: '', valid: 'pending', error: null },
    step: { value: 'phone' },
    token: { value: '' },
    webview: { ref: useRef(null) }
  }

  const reducer = (state, action) => {
    const { value = state.value, valid } = action
    switch (action.type) {
      // Individual Field Validations.
      case 'step':
        return { ...state, step: value }
      case 'code':
        return value.length === 6
          ? { ...state, code: { ...state.code, value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, code: { ...state.code, value, valid: 'invalid', error: null } }
      case 'phone':
        if (value.length >= 3 && !vPhone(value.substring(0, 3))) {
          return { ...state, phone: { ...state.phone, value, valid: 'invalid', error: 'Invalide canadaian number' } }
        }
        return value.length === 10
          ? { ...state, phone: { ...state.phone, value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, phone: { ...state.phone, value, valid: 'invalid', error: null } }
      case 'token':
        return value.code === 'txtMsgSent' ? { ...state, token: { value: value.id }, step: { value: 'code' } } : state

      // Firebase Auth Errors.
      case 'auth/invalid-verification-code':
        return { ...state, code: { ...state.code, valid: 'invalid', error: 'Incorrect verification code.' } }
      default:
        return state
    }
  }

  return useReducer(reducer, defaultState)
}

export default useFormValidation
