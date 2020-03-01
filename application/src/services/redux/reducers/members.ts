import * as A from 'services/redux/actions'

const defaultState = [
  {
    id: '123456789',
    author: '123456789',
    firstName: 'Marvin',
    photoUrl: 'google.ca',
    updated: { toDate: () => 12341223232 },
    created: { toDate: () => 12341223232 }
  }
]

const members = (state = defaultState, action) => {
  switch (action.type) {
    case A.ADD_MEMBERS:
      return [...state, action.value]
    default:
      return state
  }
}

export default members
