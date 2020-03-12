import * as A from '../actions'

const defaultState = {
  text: '',
  image: false
}

const compose = (state = defaultState, action) => {
  switch (action.type) {
    case A.COMPOSE_TEXT_INPUT:
      return { ...state, text: action.value }
    default:
      return state
  }
}

export default compose
