import * as A from '../actions'

const defaultState = {
  authentication: 'pending',
  profile: null
}

const user = (state = defaultState, action) => {
  switch (action.type) {
    case A.SIGN_IN:
      return { ...state, authentication: 'success', profile: action.profile }
    case A.SIGN_OUT:
      return { ...defaultState, authentication: 'failed', profile: null }
    default:
      return state
  }
}

export default user
