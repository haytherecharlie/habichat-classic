import * as A from 'services/redux/actions'

const defaultState = [
  // {
  //   id: 12344422,
  //   author: '123456789',
  //   image: false,
  //   text: 'hello',
  //   created: 12345232324,
  //   updated: 12224353422
  // }
]

const messages = (state = defaultState, action) => {
  switch (action.type) {
    case A.ADD_MESSAGES:
      return [...state, action.value]
    default:
      return state
  }
}

export default messages
