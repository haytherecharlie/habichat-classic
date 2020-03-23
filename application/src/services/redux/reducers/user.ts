import * as A from '../actions'

const defaultState = {
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null,
  providerId: null,
  uid: null
}

const user = (state = defaultState, action) => {
  switch (action.type) {
    case A.USER_SIGN_IN:
      return { ...state, ...action.value }
    case A.USER_SIGN_OUT:
      return { ...defaultState }
    default:
      return state
  }
}

export default user
