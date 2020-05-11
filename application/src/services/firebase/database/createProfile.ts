import { auth, db } from 'services/firebase'
import store from 'services/redux'
import * as A from 'services/redux/actions'

const createDbUser = async (uid, profile) => {
  try {
    const communityRef = db().doc(`communities/${profile.postalCode.value.substr(0, 3)}`)
    const userRef = db().doc(`users/${uid}`)
    const userData = {
      communities: [communityRef],
      displayName: `${profile.first.value} ${profile.last.value}`,
      firstName: profile.first.value,
      lastName: profile.last.value,
      photoURL: profile.avatar.value,
      postalCode: profile.postalCode.value.replace(/\s/g, '')
    }

    return await db().runTransaction(async transaction => {
      const communityDoc = await transaction.get(communityRef)
      transaction.set(userRef, userData, { merge: true })
      const communityData = communityDoc.exists
        ? { members: [...communityDoc.data().members, userRef] }
        : { displayName: 'Ville Émard', members: [userRef], posts: [] }
      transaction.set(communityRef, communityData, { merge: true })
    })
  } catch (err) {
    throw 'Error running create new user transaction.'
  }
}

const updateAuthUser = async (currentUser, profile) => {
  try {
    return await currentUser.updateProfile({
      displayName: `${profile.first.value} ${profile.last.value}`,
      photoURL: profile.avatar.value
    })
  } catch (err) {
    throw 'Error updating auth user profile.'
  }
}

const dbCreateProfile = async profile => {
  try {
    const currentUser = auth().currentUser
    await Promise.all([createDbUser(currentUser.uid, profile), updateAuthUser(currentUser, profile)])
    return store.dispatch({ type: A.NAVIGATE, screen: 'community' })
  } catch (err) {
    throw 'Error creating db profile'
  }
}

export default dbCreateProfile
