import { useReducer, useRef } from 'react'
import { vAddress, vName, randomAvatar } from 'utils/helpers'

const useCreateProfileReducer = () => {
  const defaultState = {
    step: { value: 'address' },
    avatar: { value: randomAvatar() },
    address: { value: '', valid: 'pending', error: null },
    first: { value: '', valid: 'pending', error: null, ref: useRef() },
    last: { value: '', valid: 'pending', error: null, ref: useRef() }
  }

  const reducer = (state, action) => {
    const { value = state.value, valid } = action
    console.log(vAddress(value) === 'valid')
    switch (action.type) {
      case 'first':
        return vName(value) === 'valid'
          ? { ...state, first: { ...state.first, value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, first: { ...state.first, value, valid: 'invalid', error: null } }
      case 'last':
        return vName(value) === 'valid'
          ? { ...state, last: { ...state.last, value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, last: { ...state.last, value, valid: 'invalid', error: null } }
      case 'address':
        return vAddress(value) === 'valid'
          ? { ...state, step: 'name', address: { ...state.address, value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, address: { ...state.address, value, valid: 'invalid', error: null } }
      case 'find-errors':
        return {
          first:
            vName(state.first.value) !== 'valid'
              ? { ...state.first, valid: 'invalid', error: 'first-name-error' }
              : state.first,
          last:
            vName(state.last.value) !== 'valid'
              ? { ...state.last, valid: 'invalid', error: 'last-name-error' }
              : state.last
        }
      default:
        return state
    }
  }

  return useReducer(reducer, defaultState)
}

export default useCreateProfileReducer
