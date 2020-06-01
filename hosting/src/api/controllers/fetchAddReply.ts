import createReply from 'api/utils/createReply'
import store from 'services/redux'

const fetchAddReply = async (cid, pid, bodyText, type) => {
  try {
    const { displayName, photoURL, userID } = store.getState().account
    const reply = await createReply(cid, pid, { bodyText, type, userID, userInfo: { displayName, photoURL } })
    return reply
  } catch (err) {
    console.log(err)
    throw err
  }
}

export default fetchAddReply
