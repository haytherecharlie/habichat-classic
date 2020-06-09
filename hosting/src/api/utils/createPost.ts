import { db, ts } from 'services/firebase'

const createPost = async (cid, text, user) => {
  try {
    const postRef = db().collection(`communities/${cid}/posts/`).doc()
    const postObj = { text, createdAt: ts.now(), updatedAt: ts.now(), communityID: cid, author: user }
    await postRef.set(postObj)
    return { [postRef.id]: postObj }
  } catch (err) {
    throw err
  }
}

export default createPost
