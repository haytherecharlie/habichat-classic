import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import communities from 'services/redux/reducers/communities'
import posts from 'services/redux/reducers/posts'
import ui from 'services/redux/reducers/ui'

const reducer = combineReducers({ communities, posts, ui })

export default createStore(reducer, composeWithDevTools())
