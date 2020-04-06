import * as A from '../actions'

const defaultState = {
  screen: null,
  initialization: 'pending',
  keyboardUp: false
}

const application = (state = defaultState, action) => {
  switch (action.type) {
    case A.INITIALIZATION:
      return { ...state, initialization: action.status }
    case A.KEYBOARD_UP:
      return { ...state, keyboardUp: action.status }
    case A.SIGN_IN:
      return { ...state, screen: 'initialization' }
    case A.SIGN_OUT:
      return { ...state, screen: 'sign-in' }
    case A.NAVIGATE:
      return { ...state, screen: action.screen }
    default:
      return state
  }
}

export default application
