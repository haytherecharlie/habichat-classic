import { useReducer, useRef } from 'react'
import { vName, vEmail, vPass } from 'utils/helpers'

const useFormValidation = () => {
  const defaultState = {
    page: 'RegisterForm',
    first: { value: '', valid: 'pending', error: null },
    last: { value: '', valid: 'pending', error: null },
    email: { value: '', valid: 'pending', error: null },
    pass: { value: '', valid: 'pending', error: null },
    refs: { first: useRef(), last: useRef(), email: useRef(), pass: useRef() }
  }

  const reducer = (state, action) => {
    const { value = state.value, valid } = action
    switch (action.type) {
      case 'page':
        return { ...state, page: action.value }
      case 'first':
        return vName(value) === 'valid'
          ? { ...state, first: { value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, first: { value, valid: 'invalid', error: 'Please include a valid first name.' } }
      case 'last':
        return vName(value) === 'valid'
          ? { ...state, last: { value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, last: { value, valid: 'invalid', error: 'Please include a valid last Name.' } }
      case 'email':
        return vEmail(value) === 'valid'
          ? { ...state, email: { value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, email: { value, valid: 'invalid', error: 'Please include a valid email address.' } }
      case 'pass':
        return vPass(value) === 'valid'
          ? { ...state, pass: { value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, pass: { value, valid: 'invalid', error: 'Passwords are minimum six characters.' } }
      case 'validate':
        return {
          ...state,
          first: state.first.value === '' ? { ...state.first, valid: 'invalid', error: 'Please include a valid first name.' } : state.first,
          last: state.last.value === '' ? { ...state.last, valid: 'invalid', error: 'Please include a valid last name.' } : state.last,
          email: state.email.value === '' ? { ...state.email, valid: 'invalid', error: 'Please include a valid email name.' } : state.email,
          pass: state.pass.value === '' ? { ...state.pass, valid: 'invalid', error: 'Passwords are minimum eight characters.' } : state.pass
        }
      case 'email-not-found':
        return { ...state, page: 'RegisterForm', email: { value, valid: 'invalid', error: 'Email address not registered.' } }
      case 'email-taken':
        return { ...state, page: 'RegisterForm', email: { value, valid: 'invalid', error: 'Email address already registered.' } }
      case 'weak-password':
        return { ...state, page: 'RegisterForm', pass: { value, valid: 'invalid', error: 'Try using a stronger password.' } }
      case 'wrong-password':
        return { ...state, page: 'RegisterForm', pass: { value, valid: 'invalid', error: 'Incorrect password.' } }
      default:
        return state
    }
  }

  return useReducer(reducer, defaultState)
}

export default useFormValidation
