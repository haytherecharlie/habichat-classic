import * as A from 'services/redux/actions'

const avatars = [
  'https://habi.chat/avatars/brad_pitt.jpeg',
  'https://habi.chat/avatars/jennifer_lopez.jpeg',
  'https://habi.chat/avatars/will_smith.jpeg'
]

const defaultState = {
  authenticated: true,
  communityID: 'H4E',
  displayName: `TestingUser_${Math.floor(Math.random() * 100)}`,
  photoURL: avatars[Math.floor(Math.random() * 3)],
  userID: 'exmPKxLrWMf0RTQFB4hb'
}

const accountReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default accountReducer
