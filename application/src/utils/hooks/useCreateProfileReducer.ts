import { useReducer, useRef } from 'react'
import { vName, randomAvatar } from 'utils/helpers'

const useCreateProfileReducer = () => {
  const defaultState = {
    avatar: { value: randomAvatar() },
    city: { value: `UCzo17XTeHoki6bHcy2B` },
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
      case 'find-errors':
        return {
          first:
            vName(state.first.value) !== 'valid'
              ? { ...state.first, valid: 'invalid', error: 'Please include a valid first name.' }
              : state.first,
          last:
            vName(state.last.value) !== 'valid'
              ? { ...state.last, valid: 'invalid', error: 'Please include a valid last name.' }
              : state.last
        }
      default:
        return state
    }
  }

  return useReducer(reducer, defaultState)
}

export default useCreateProfileReducer
