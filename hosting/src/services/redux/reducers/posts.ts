import pathOr from 'ramda.pathor'
import * as A from 'services/redux/actions'

const defaultState = null

const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.POSTS:
      return { ...state, [action.cid]: action.value }
    default:
      return state
  }
}

export default postsReducer
