import * as A from 'services/redux/actions'

const defaultState = null

const messages = (state = defaultState, action) => {
  switch (action.type) {
    case A.INTIAILIZE_APP:
      return action.value.messages
    case A.ADD_MESSAGES:
      let newMessage = [...state]
      const newMessageIndex = state.findIndex(x => x.id === action.value.id)
      if (newMessageIndex !== -1) {
        newMessage.splice(newMessageIndex, 1, action.value)
        return newMessage
      }
      newMessage.splice(newMessage.length, newMessage.length >= 50 ? 1 : 0, action.value)
      return newMessage
    case A.UPDATE_MESSAGES:
      const updatedMessageIndex = state.findIndex(x => x.id === action.value.id)
      if (updatedMessageIndex !== -1) {
        let updatedMessage = state.slice()
        updatedMessage.splice(updatedMessageIndex, 1, action.value)
        return updatedMessage
      }
      return state
    case A.DELETE_MESSAGES:
      const deletedMessageIndex = state.findIndex(x => x.id === action.value.id)
      if (deletedMessageIndex !== -1) {
        let deletedMessage = state.slice()
        deletedMessage.splice(deletedMessageIndex, 1)
        return deletedMessage
      }
      return state
    default:
      return state
  }
}

export default messages
