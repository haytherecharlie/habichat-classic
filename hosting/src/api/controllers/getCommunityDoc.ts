import { db } from 'services/firebase'

const getCommunityDoc = async cid => {
  try {
    const communityRef = await db().doc(`communities/${cid}`)
    const communityReq = await communityRef.get()
    const communityDoc = communityReq.data()
    if (!communityDoc) throw new Error('Cannot find community')
    return communityDoc
  } catch (err) {
    throw err
  }
}

export default getCommunityDoc
