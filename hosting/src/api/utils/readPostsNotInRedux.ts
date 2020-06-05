import pathOr from 'ramda.pathor'
import { db } from 'services/firebase'

const readPostsNotInRedux = async (postIdEntries, reduxPosts, acc = {}) => {
  try {
    const postRequests = postIdEntries
      .filter(([pid, timestamp]) => filterPostRequests(timestamp, reduxPosts[pid]))
      .map(([pid, timestamp]) => createPostRequests([pid, timestamp], reduxPosts[pid], acc))
    await Promise.all(postRequests)
    return acc
  } catch (err) {
    throw err
  }
}

const filterPostRequests = (timestamp, reduxPost) => {
  const reduxPostTimestamp = pathOr(1, ['metadata', 'updatedAt', 'seconds'], reduxPost)
  const reduxPostIdTimestamp = pathOr(2, ['seconds'], timestamp)
  return !reduxPost || reduxPostTimestamp !== reduxPostIdTimestamp
}

const createPostRequests = async ([pid, timestamp], reduxPost, acc) => {
  const doc = await db()
    .doc(`posts/${pid}`)
    .get()
    .catch(() => (acc[pid] = undefined))
  return (acc[doc.id] = doc.data())
}

export default readPostsNotInRedux
