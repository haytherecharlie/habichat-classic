import * as A from 'services/redux/actions'

const defaultState = null

const community = (state = defaultState, action) => {
  switch (action.type) {
    case A.INTIAILIZE_APP:
      return action.value.community
    default:
      return state
  }
}

export default community
