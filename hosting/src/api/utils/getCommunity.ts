import { db } from 'services/firebase'
import { store } from 'services/redux'

const getCommunityDoc = async cid => {
  try {
    const reduxCommunity = store.getState()[cid]
    if (reduxCommunity) return reduxCommunity
    const communityReq = await db().doc(`communities/${cid}`).get()
    const communityDoc = communityReq.data()
    store.dispatch({ type: 'COMMUNITY', cid, value: communityDoc })
    return communityDoc
  } catch (err) {
    console.error(err)
    throw err
  }
}

export default getCommunityDoc
