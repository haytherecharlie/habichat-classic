import pathOr from 'ramda.pathor'
import * as A from 'services/redux/actions'

const defaultState = null

const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.COMMUNITY:
      return { ...state, [action.cid]: action.posts }
    case A.POST:
      return pathOr(false, [action.cid], state)
        ? { ...state, [action.cid]: { ...state[action.cid], [action.pid]: action.data } }
        : { ...state, [action.cid]: { [action.pid]: action.data } }
    case A.REPLY:
      const replies = { ...state[action.cid][action.pid].replies, ...action.reply }
      return {
        ...state,
        [action.cid]: { ...state[action.cid], [action.pid]: { ...state[action.cid][action.pid], replies } }
      }
    default:
      return state
  }
}

export default postsReducer
