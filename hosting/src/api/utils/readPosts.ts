import { db } from 'services/firebase'

const getPosts = async (postsArr, acc = {}) => {
  try {
    const postRequests = postsArr.map((p) => createPostRequests(p, acc))
    await Promise.all(postRequests)
    return acc
  } catch (err) {
    throw err
  }
}

const createPostRequests = async (pid, acc) => {
  const doc = await db().doc(`posts/${pid}`).get().catch(() => acc[pid] = undefined)
  return acc[doc.id] = doc.data()
}

export default getPosts
