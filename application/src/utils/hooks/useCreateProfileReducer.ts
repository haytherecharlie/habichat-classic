import { useReducer, useRef } from 'react'
import { vPostalCode, vName, randomAvatar } from 'utils/helpers'

const useCreateProfileReducer = () => {
  const defaultState = {
    avatar: { value: randomAvatar() },
    postalCode: { value: '', valid: 'pending', error: null, ref: useRef() },
    first: { value: '', valid: 'pending', error: null, ref: useRef() },
    last: { value: '', valid: 'pending', error: null, ref: useRef() }
  }

  const reducer = (state, action) => {
    const { value = state.value, valid } = action
    switch (action.type) {
      case 'first':
        return vName(value) === 'valid'
          ? { ...state, first: { ...state.first, value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, first: { ...state.first, value, valid: 'invalid', error: null } }
      case 'last':
        return vName(value) === 'valid'
          ? { ...state, last: { ...state.last, value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, last: { ...state.last, value, valid: 'invalid', error: null } }
      case 'postal-code':
        return vPostalCode(value) === 'valid'
          ? { ...state, postalCode: { ...state.postalCode, value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, postalCode: { ...state.postalCode, value, valid: 'invalid', error: null } }
      case 'find-errors':
        return {
          first:
            vName(state.first.value) !== 'valid'
              ? { ...state.first, valid: 'invalid', error: 'first-name-error' }
              : state.first,
          last:
            vName(state.last.value) !== 'valid'
              ? { ...state.last, valid: 'invalid', error: 'last-name-error' }
              : state.last,
          postalCode:
            vPostalCode(state.postalCode.value) !== 'valid'
              ? { ...state.postalCode, valid: 'invalid', error: 'postal-code-error' }
              : state.postalCode
        }
      default:
        return state
    }
  }

  return useReducer(reducer, defaultState)
}

export default useCreateProfileReducer
