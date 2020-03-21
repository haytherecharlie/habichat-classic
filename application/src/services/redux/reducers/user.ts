import * as A from '../actions'

const defaultState = {
  address: null,
  firstName: null,
  lastName: null,
  emailAddress: null
}

const application = (state = defaultState, action) => {
  switch (action.type) {
    case A.USER_ADDRESS:
      return { ...state, address: action.value }
    case A.USER_FIRSTNAME:
      return { ...state, firstName: action.firstName }
    case A.USER_LASTNAME:
      return { ...state, lastName: action.lastName }
    case A.USER_EMAIL:
      return { ...state, email: action.email }
    default:
      return state
  }
}

export default application
