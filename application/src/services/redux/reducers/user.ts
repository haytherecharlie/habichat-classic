import * as A from '../actions'

const defaultState = {
  authentication: 'pending',
  account: null
}

const user = (state = defaultState, action) => {
  switch (action.type) {
    case A.SIGN_IN:
      return { ...state, authentication: 'success', account: action.value }
    case A.SIGN_OUT:
      return { ...defaultState, authentication: 'failed' }
    default:
      return state
  }
}

export default user
