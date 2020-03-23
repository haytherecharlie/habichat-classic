import * as A from '../actions'

const defaultState = {
  authenticated: {},
  unauthenticated: {},
  universal: {
    initialized: false,
    authentication: false,
    keyboardUp: false
  }
}

const application = (state = defaultState, action) => {
  switch (action.type) {
    case A.INTIAILIZE_APP:
      return { ...state, universal: { ...state.universal, initialized: true } }
    case A.KEYBOARD_UP:
      return { ...state, universal: { ...state.universal, keyboardUp: action.status } }
    case A.USER_SIGN_IN:
      return { ...state, universal: { ...state.universal, authenticated: true } }
    case A.USER_SIGN_OUT:
      return { ...state, universal: { ...state.universal, authenticated: false } }
    default:
      return state
  }
}

export default application
