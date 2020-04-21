import { applyMiddleware, createStore, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import app from './reducers/app'
import community from './reducers/community'
import compose from './reducers/compose'
import messages from './reducers/messages'
import members from './reducers/members'
import user from './reducers/user'
import * as A from './actions'

const display = true

const logger = createLogger({
  predicate: (getState, action) => {
    // console.log(getState())
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

export default display ? createStore(reducer, applyMiddleware(logger)) : createStore(reducer)
