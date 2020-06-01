import { db, ts } from 'services/firebase'

const createReply = async (cid, pid, reply) => {
  try {
    const replyRef = db().collection(`communities/${cid}/posts/${pid}/replies`).doc()
    const replyObj = { ...reply, timestamp: ts.now() }
    await replyRef.set(replyObj)
    return { [replyRef.id]: replyObj }
  } catch (err) {
    throw err
  }
}

export default createReply
