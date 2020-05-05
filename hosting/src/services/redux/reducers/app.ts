import * as A from '../actions'

const dState = {
  dimensions: 'mobile',
  nav: false
}

const reducer = (state = dState, action) => {
  switch (action.type) {
    case A.SET_DIMENSIONS:
      return { ...state, dimensions: action.value }
    case A.TOGGLE_NAV:
      return { ...state, nav: !state.nav }
    default:
      return state
  }
}

export default reducer
