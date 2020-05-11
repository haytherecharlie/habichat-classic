import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import app from './reducers/app'
import community from './reducers/community'
import compose from './reducers/compose'
import user from './reducers/user'

const reducers = combineReducers({ app, community, compose, user })

export default createStore(reducers, composeWithDevTools())
