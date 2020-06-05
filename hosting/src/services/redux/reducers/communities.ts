import * as A from 'services/redux/actions'

const defaultState = null

const communitiesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.COMMUNITY:
      return { ...state, [action.cid]: action.value }
    case A.POSTS:
      return { ...state, [action.cid]: { ...state[action.cid], newPosts: [] } }
    default:
      return state
  }
}

export default communitiesReducer
