import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import communities from 'services/redux/reducers/communities'
import ui from 'services/redux/reducers/ui'

const reducer = combineReducers({ communities, ui })

export default createStore(reducer, composeWithDevTools())
