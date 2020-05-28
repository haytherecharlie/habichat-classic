import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import app from 'services/redux/reducers/app'
import community from 'services/redux/reducers/community'
import members from 'services/redux/reducers/members'
import posts from 'services/redux/reducers/posts'
import user from 'services/redux/reducers/user'

const reducer = combineReducers({ app, community, members, posts, user })

export default createStore(reducer, composeWithDevTools())
