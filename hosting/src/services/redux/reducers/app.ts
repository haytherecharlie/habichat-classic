import * as A from 'services/redux/actions'

const defaultState = {
  status: 'pending',
  dimensions: 'mobile',
  nav: false
}

const reducer = (state = defaultState, action) => {
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
