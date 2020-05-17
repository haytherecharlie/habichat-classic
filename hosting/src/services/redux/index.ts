import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import app from './reducers/app'
import community from './reducers/community'
import members from './reducers/members'
import posts from './reducers/posts'

const reducer = combineReducers({ app, community, members, posts })

export default preloadedState => createStore(reducer, preloadedState, composeWithDevTools())
