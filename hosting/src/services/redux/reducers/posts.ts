import * as A from 'services/redux/actions'

const defaultState = {}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.INIT_COMMUNITY:
      return { ...action.posts }
    default:
      return state
  }
}

export default reducer
