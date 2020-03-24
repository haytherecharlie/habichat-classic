import * as A from '../actions'

const defaultState = {
  authenticated: {
    initialized: false
  },
  unauthenticated: {},
  universal: {
    initialized: false,
    keyboardUp: false
  }
}

const application = (state = defaultState, action) => {
  switch (action.type) {
    case A.INTIAILIZE_APP:
      return { ...state, universal: { ...state.universal, initialized: true } }
    case A.KEYBOARD_UP:
      return { ...state, universal: { ...state.universal, keyboardUp: action.status } }
    default:
      return state
  }
}

export default application
