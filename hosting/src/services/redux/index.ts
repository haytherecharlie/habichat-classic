import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import account from 'services/redux/reducers/account'
import communities from 'services/redux/reducers/communities'
import posts from 'services/redux/reducers/posts'
import replies from 'services/redux/reducers/replies'
import ui from 'services/redux/reducers/ui'

const reducer = combineReducers({ account, communities, posts, replies, ui })

export default createStore(reducer, composeWithDevTools())
