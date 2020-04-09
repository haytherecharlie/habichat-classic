import { applyMiddleware, createStore, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import app from './reducers/app'
import community from './reducers/community'
import compose from './reducers/compose'
import messages from './reducers/messages'
import members from './reducers/members'
import user from './reducers/user'
import * as A from './actions'

const logger = createLogger({
  predicate: (getState, action) => {
    if(action.type === A.SIGN_IN) {
      console.log(action)
    }
  }
})

const reducer = combineReducers({
  app,
  community,
  compose,
  messages,
  members,
  user
})

export default createStore(reducer, applyMiddleware(logger))
