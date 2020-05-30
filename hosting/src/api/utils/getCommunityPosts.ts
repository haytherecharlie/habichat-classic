import { db } from 'services/firebase'

const getCommunityPosts = async (cid, minAge = undefined) => {
  try {
    const postsCollectionRef = minAge
      ? await db().collection(`communities/${cid}/posts`).where('timestamp', '>', minAge).orderBy('timestamp').limit(50)
      : await db().collection(`communities/${cid}/posts`).orderBy('timestamp').limit(50)
    const postsCollectionReq = await postsCollectionRef.get()
    return postsCollectionReq.docs.reduce((obj, doc) => ({ ...obj, [doc.id]: doc.data() }), {})
  } catch (err) {
    throw err
  }
}

export default getCommunityPosts
