import * as A from 'services/redux/actions'

const defaultState = null

const communitiesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.COMMUNITY:
      return { ...state, [action.cid]: action.community }
    default:
      return state
  }
}

export default communitiesReducer
