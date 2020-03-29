import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const defaultState = {}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default (pState) => createStore(reducer, pState, composeWithDevTools())
