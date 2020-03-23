import * as A from '../actions'

const defaultState = {
  name: '',
  city: ''
}

const community = (state = defaultState, action) => {
  switch (action.type) {
    case A.INTIAILIZE_APP:
      return action.value.community
    default:
      return state
  }
}

export default community
