import * as A from 'services/redux/actions'

const defaultState = {
  initialized: false,
  authenticated: true
}

const application = (state = defaultState, action) => {
  switch (action.type) {
    case A.INTIAILIZE_APP:
      return { ...state, initialized: true }
    default:
      return state
  }
}

export default application
