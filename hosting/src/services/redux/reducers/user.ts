import * as A from 'services/redux/actions'

const defaultState = {
  authenticated: true,
  profile: {
    displayName: 'DemoDogg',
    photoURL: "https://habi.chat/avatars/beyonce_knowles.jpeg"
  }
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
