import * as A from 'services/redux/actions'

const defaultState = {}

const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.POSTS:
      return { ...state, [action.cid]: { ...action.posts } }
    case A.POST:
      return { ...state, [action.cid]: { ...state[action.cid], ...action.post } }
    case A.CREATE_POST:
      return { ...state, [action.cid]: { ...state[action.cid], ...action.post } }
    default:
      return state
  }
}

export default postsReducer
