import { db } from 'services/firebase'

const getPost = async (cid, pid) => {
  try {
    const postReq = await db().doc(`communities/${cid}/posts/${pid}`).get()
    if (!postReq.exists) throw new Error('Cannot find post')
    return postReq.data()
  } catch (err) {
    throw err
  }
}

export default getPost
