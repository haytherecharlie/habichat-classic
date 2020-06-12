import * as A from 'services/redux/actions'

const defaultState = {}

const repliesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.REPLIES:
      return { ...state, [action.pid]: { ...action.replies } }
    // case A.CREATE_POST:
    // return { ...state, [action.cid]: { ...state[action.cid], ...action.post } }
    default:
      return state
  }
}

export default repliesReducer
