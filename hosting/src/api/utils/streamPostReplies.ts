import { db } from 'services/firebase'
import store from 'services/redux'

const streamPostReplies = pid => {
  return db()
    .collection('/replies')
    .where('postID', '==', pid)
    .orderBy('createdAt', 'desc')
    .limit(50)
    .onSnapshot(snapshot => {
      return store.dispatch({
        type: 'REPLIES',
        pid,
        replies: snapshot.docs.reduce((acc, doc) => ({ ...acc, [doc.id]: doc.data() }), {})
      })
    })
}

export default streamPostReplies
