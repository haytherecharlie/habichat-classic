import { db } from 'services/firebase'

const getPosts = async (cid, minAge = undefined) => {
  try {
    const postsReq = minAge
      ? await db().collection(`communities/${cid}/posts`).where('timestamp', '>', minAge).orderBy('timestamp').limit(50).get()
      : await db().collection(`communities/${cid}/posts`).orderBy('timestamp').limit(50).get()
    return postsReq.docs.reduce((obj, doc) => ({ ...obj, [doc.id]: doc.data() }), {})
  } catch (err) {
    throw err
  }
}

export default getPosts
