import * as A from 'services/redux/actions'

const defaultState = null

const messages = (state = defaultState, action) => {
  switch (action.type) {
    case A.INTIAILIZE_APP:
      return action.value.messages
    case A.ADD_MESSAGES:
      return [...state, action.value]
    default:
      return state
  }
}

export default messages
