import * as A from '../actions'

const defaultState = {
  initialized: false,
  authenticated: false,
  keyboardUp: false
}

const application = (state = defaultState, action) => {
  switch (action.type) {
    case A.INTIAILIZE_APP:
      return { ...state, initialized: true }
    case A.KEYBOARD_UP:
      return { ...state, keyboardUp: action.status }
    case A.USER_SIGN_IN:
      return { ...state, authenticated: true }
    case A.USER_SIGN_OUT:
      return { ...state, authenticated: false }
    default:
      return state
  }
}

export default application
