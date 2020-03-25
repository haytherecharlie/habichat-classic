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
// "displayName": null,
// "email": "charlie.hay@outlook.com",
// "phoneNumber": null,
// "photoURL": null,
// "providerId": "password",
// "uid": "charlie.hay@outlook.com",

const user = (state = defaultState, action) => {
  switch (action.type) {
    case A.SIGN_IN:
      return { ...state, authentication: 'success', profile: action.profile }
    case A.SIGN_IN:
      return { ...defaultState, authentication: 'failed' }
    case A.PROFILE:
      return { type: '', profile: action.profile }
    default:
      return state
  }
}

export default user
