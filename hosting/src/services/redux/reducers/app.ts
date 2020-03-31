import * as A from "services/redux/actions"

const defaultState = {
  darkMode: true,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.DARK_MODE:
      return { ...state, darkMode: action.status }
    default:
      return state
  }
}

export default reducer
