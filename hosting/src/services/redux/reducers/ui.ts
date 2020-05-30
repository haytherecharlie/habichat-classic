import * as A from 'services/redux/actions'

const defaultState = {
  status: 'pending',
  dimensions: 'mobile',
  language: null,
  nav: false
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.DIMENSIONS:
      return { ...state, dimensions: action.value }
    case A.LANGUAGE:
      return { ...state, language: action.language }
    case A.NAV:
      return { ...state, nav: !state.nav }
    default:
      return state
  }
}

export default reducer
