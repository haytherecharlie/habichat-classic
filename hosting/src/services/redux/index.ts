import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import app from './reducers/app'
import community from './reducers/community'
import members from './reducers/members'
import posts from './reducers/posts'
import user from './reducers/user'

const reducer = combineReducers({ app, community, members, posts, user })

export default preloadedState => createStore(reducer, preloadedState, composeWithDevTools())
