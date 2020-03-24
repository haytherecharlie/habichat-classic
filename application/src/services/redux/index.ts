import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import app from './reducers/app'
import community from './reducers/community'
import compose from './reducers/compose'
import messages from './reducers/messages'
import members from './reducers/members'
import user from './reducers/user'

const reducer = combineReducers({
  app,
  community,
  compose,
  messages,
  members,
  user
})

export default createStore(reducer, composeWithDevTools())
