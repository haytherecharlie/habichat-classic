import * as A from 'services/redux/actions'

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
    default:
      return state
  }
}

export default application
