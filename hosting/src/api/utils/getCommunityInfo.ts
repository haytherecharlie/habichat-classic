import { db } from 'services/firebase'

const getCommunityInfo = async cid => {
  try {
    const communityDocRef = await db().doc(`communities/${cid}`)
    const communityDocReq = await communityDocRef.get()
    if (!communityDocReq.exists) throw new Error('Cannot find community')
    return communityDocReq.data()
  } catch (err) {
    throw err
  }
}

export default getCommunityInfo
