import * as A from '../actions'

const defaultState = null

const members = (state = defaultState, action) => {
  switch (action.type) {
    case A.INTIAILIZE_APP:
      return action.value.members
    case A.ADD_MEMBERS:
      return [...state, action.value]
    default:
      return state
  }
}

export default members
