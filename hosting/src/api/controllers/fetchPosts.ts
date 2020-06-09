import { db } from 'services/firebase'
import store from 'services/redux'

const fetchPosts = cid => {
  try {
    return db().collection('/posts').where('communityID', '==', cid.toUpperCase()).orderBy('createdAt', 'desc').limit(50).onSnapshot(snapshot => {
      return store.dispatch({ type: 'POSTS', cid, posts: snapshot.docs.reduce((acc, doc) => ({ ...acc, [doc.id]: doc.data() }), {}) })
    })
  } catch (err) {
    console.error(err)
    throw err
  }
}

export default fetchPosts
