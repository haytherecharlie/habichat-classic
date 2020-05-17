import * as A from 'services/redux/actions'

const defaultState = null

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.INIT_COMMUNITY:
      return { ...action.members }
    default:
      return state
  }
}

export default reducer
