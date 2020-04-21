import * as A from '../actions'

const defaultState = {
  initialization: 'pending',
  keyboardUp: false,
  language: 'en',
  screen: null,
}

const application = (state = defaultState, action) => {
  switch (action.type) {
    case A.INITIALIZATION:
      return { ...state, initialization: action.status }
    case A.KEYBOARD_UP:
      return { ...state, keyboardUp: action.status }
    case A.SIGN_IN:
      return { ...state, screen: action.screen }
    case A.SIGN_OUT:
      return { ...state, screen: 'landing' }
    case A.NAVIGATE:
      return { ...state, screen: action.screen }
    default:
      return state
  }
}

export default application
