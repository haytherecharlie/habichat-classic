import { pathOr } from 'ramda'
import { db, ts } from 'services/firebase'
import store from 'services/redux'

const fetchCreatePost = async (cid, text) => {
  try {
    const { displayName, photoURL, userID } = pathOr(undefined, ['account'], store.getState())
    if (!displayName || !photoURL || !userID) throw new Error('Account not found')
    const newPost = {
      author: {
        displayName,
        photoURL
      },
      communityID: cid,
      createdAt: ts.now(),
      replies: 0,
      reports: 0,
      text,
      updatedAt: ts.now(),
      userID
    }
    const postRef = db().collection('posts').doc()
    postRef.set({ ...newPost, server: true })
    return store.dispatch({ type: 'CREATE_POST', cid, post: { [postRef.id]: { ...newPost, server: false } } })
  } catch (err) {
    console.log(err)
    throw err
  }
}

export default fetchCreatePost
