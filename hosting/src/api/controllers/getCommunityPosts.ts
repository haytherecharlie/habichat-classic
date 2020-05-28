import { db } from 'services/firebase'
import store from 'services/redux'

const getCommunity = async cid => {
  try {
    let [communityDoc, communityRedux] = await Promise.all([_fetchFirebaseCommunity(cid), _fetchReduxCommunity()])
    await _fetchCommunityPosts(cid, communityDoc, communityRedux)
  } catch (err) {
    console.error(err)
    return { status: 'error', data: err.message }
  }
}

const _fetchCommunityPosts = async (cid, doc, redux) => {
  try {
    const limit = Math.min(doc.totalPosts - redux.totalPosts, 50)
    const postRef = redux.latestPost
      ? db().collection(`communities/${cid}/posts`).where('timestamp', '>', redux.latestPost).limit(limit)
      : db().collection(`communities/${cid}/posts`).limit(limit)
    const postReq = await postRef.get()
    console.log(postReq.size)
  } catch (err) {
    throw err
  }
}

const _fetchReduxCommunity = () => {
  let community = store.getState().community
  return !community || !community.latestPost || !community.totalPosts
    ? { totalPosts: 0, timestamp: null }
    : { totalPosts: community.totalPosts, latestPost: community.latestPost.timestamp }
}

const _fetchFirebaseCommunity = async cid => {
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

export default getCommunity
