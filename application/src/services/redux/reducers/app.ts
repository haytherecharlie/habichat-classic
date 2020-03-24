import * as A from '../actions'

const defaultState = {
  screen: null,
  initialization: {
    status: 'pending',
    message: 'loading fonts...'
  },
  keyboardUp: false
}

const application = (state = defaultState, action) => {
  switch (action.type) {
    case A.INITIALIZATION:
      return { ...state, initialization: { status: action.status || state.status, message: action.message || state.message } }
    case A.KEYBOARD_UP:
      return { ...state, keyboardUp: action.status }
    case A.SIGN_IN:
      return { ...state, screen: 'community' }
    case A.SIGN_OUT:
      return { ...state, screen: 'landing' }
    case A.NAVIGATE:
      return { ...state, screen: action.screen }
    default:
      return state
  }
}

export default application
