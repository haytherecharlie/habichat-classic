import * as R from 'ramda'
import { db } from 'services/firebase'
import store from 'services/redux'

const streamCommunity = async cid => {
  try {
    const communityReq = await db().doc(`communities/${cid}`).get()
    store.dispatch({ type: 'COMMUNITY', cid, value: communityReq.data() })
  } catch (err) {
    console.error(err)
    throw err
  }
}

export default streamCommunity
