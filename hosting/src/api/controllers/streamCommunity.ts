import * as R from 'ramda'
import { db } from 'services/firebase'
import store from 'services/redux'

const streamCommunity = cid => {
  return db().doc(`communities/${cid}`).onSnapshot(snapshot => {
      // Get redux community and data from snapshot
      const firebaseCommunity = snapshot.data()
      const reduxCommunity = R.pathOr(undefined, ['communities', cid], store.getState())
      const updatedSnapshot = reduxCommunity && !R.equals(R.pick(['postIDs', 'displayName'], reduxCommunity), firebaseCommunity)
      const newSnapshot = !reduxCommunity

      // If redux is set but snapshot has different data
      if (updatedSnapshot) {
        const firebasePostIDs = R.pathOr({}, ['postIDs'], firebaseCommunity)
        const reduxPostIDs = R.pathOr({}, ['postIDs'], reduxCommunity)
        const newPosts = Object.keys(firebasePostIDs)
          .slice(0, 50)
          .filter(pid => !reduxPostIDs[pid] || firebasePostIDs[pid].seconds !== reduxPostIDs[pid].seconds)
        return store.dispatch({ type: 'COMMUNITY', cid, value: { newPosts, ...firebaseCommunity } })
      }

      // If this is a fresh Community
      if (newSnapshot) {
        const firebasePostIDs = R.pathOr({}, ['postIDs'], firebaseCommunity)
        const newPosts = Object.keys(firebasePostIDs).slice(0, 50)
        return store.dispatch({ type: 'COMMUNITY', cid, value: { newPosts, ...firebaseCommunity } })
      }
    })
}

export default streamCommunity
