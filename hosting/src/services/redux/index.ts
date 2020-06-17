import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import account from 'services/redux/reducers/account'
import communities from 'services/redux/reducers/communities'
import posts from 'services/redux/reducers/posts'
import replies from 'services/redux/reducers/replies'
import ui from 'services/redux/reducers/ui'

const reducer = combineReducers({ account, communities, posts, replies, ui })
const persistedReducer = persistReducer({ key: 'habichat', storage }, reducer)

export const store = createStore(persistedReducer, composeWithDevTools())
export const persistor = persistStore(store)
