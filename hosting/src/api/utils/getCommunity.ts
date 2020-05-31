import { db } from 'services/firebase'

const getCommunity = async cid => {
  try {
    const communityReq = await db().doc(`communities/${cid}`).get()
    if (!communityReq.exists) throw new Error('Cannot find community')
    return communityReq.data()
  } catch (err) {
    throw err
  }
}

export default getCommunity
