import * as A from '../actions'

const defaultState = {
  authentication: 'pending',
  providerData: {
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
      return { ...state, authentication: 'success', providerData: action.providerData }
    case A.SIGN_IN:
      return { ...defaultState, authentication: 'failed' }
    case A.PROFILE:
      return { type: '', providerData: action.providerData }
    default:
      return state
  }
}

export default user
