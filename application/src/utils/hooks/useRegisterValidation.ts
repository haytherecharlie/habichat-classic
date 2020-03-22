import { useReducer, useRef } from 'react'
import * as V from 'utils/helpers/validation'

const useRegisterValidation = () => {
  const defaultState = {
    first: { value: '', valid: 'pending' },
    last: { value: '', valid: 'pending' },
    email: { value: '', valid: 'pending' },
    street: { value: '', valid: 'pending' },
    refs: { first: useRef(), last: useRef(), email: useRef(), street: useRef() }
  }

  const reducer = (state, action) => {
    const { value = state.value } = action
    switch (action.type) {
      case 'first':
        return { ...state, first: { value, valid: V.name(value) } }
      case 'last':
        return { ...state, last: { value, valid: V.name(value) } }
      case 'email':
        return { ...state, email: { value, valid: V.email(value) } }
      case 'street':
        return { ...state, street: { value, valid: V.street(value) } }
      default:
        return state
    }
  }

  return useReducer(reducer, defaultState)
}

export default useRegisterValidation
