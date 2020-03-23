import * as A from '../actions'

const defaultState = {
  auth: 'pending',
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
    case A.USER_SIGN_IN:
      return { ...state, auth: 'success', profile: action.value }
    case A.USER_SIGN_OUT:
      return { ...defaultState, auth: 'failed' }
    default:
      return state
  }
}

export default user
