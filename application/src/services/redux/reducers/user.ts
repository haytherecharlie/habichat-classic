import * as A from '../actions'

const defaultState = {
  authentication: 'pending',
  profile: {
    displayName: null,
    email: null,
    phoneNumber: null,
    photoURL: null,
    providerId: null,
    uid: null
  }
}

const user = (state = defaultState, action) => {
  switch (action.type) {
    case A.SIGN_IN:
      return { ...state, authentication: 'success', profile: action.profile }
    case A.SIGN_IN:
      return { ...defaultState, authentication: 'failed' }
    default:
      return state
  }
}

export default user
