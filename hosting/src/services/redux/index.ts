import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ui from 'services/redux/reducers/ui'
import community from 'services/redux/reducers/community'
import members from 'services/redux/reducers/members'
import posts from 'services/redux/reducers/posts'
import user from 'services/redux/reducers/user'

const reducer = combineReducers({ ui, community, members, posts, user })

export default createStore(reducer, composeWithDevTools())
