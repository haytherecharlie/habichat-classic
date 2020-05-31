import { db } from 'services/firebase'

const getReplies = async (cid, pid) => {
  try {
    const repliesReq = await db().collection(`communities/${cid}/posts/${pid}/replies`).orderBy('timestamp').limit(50).get()
    return repliesReq.docs.reduce((obj, doc) => ({ ...obj, [doc.id]: doc.data() }), {})
  } catch (err) {
    throw err
  }
}

export default getReplies
