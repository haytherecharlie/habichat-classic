import * as A from '../actions'

const defaultState = []

const members = (state = defaultState, action) => {
  switch (action.type) {
    case A.ADD_MEMBERS:
      return [...state, action.value]
    default:
      return state
  }
}

export default members
