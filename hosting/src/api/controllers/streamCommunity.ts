import { db } from 'services/firebase'
import store from 'services/redux'

const streamCommunity = cid => {
  return db()
    .doc(`communities/${cid}`)
    .onSnapshot(doc => store.dispatch({ type: 'COMMUNITY', cid, value: doc.data() }))
}

export default streamCommunity
