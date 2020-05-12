import { auth, db } from 'services/firebase'
import store from 'services/redux'
import postalCodes from 'config/postal-codes.json'
import * as A from 'services/redux/actions'

const createDbUser = async (uid, profile) => {
  try {
    const postPrefix = profile.postalCode.value.substr(0, 3)
    const communityRef = db().doc(`communities/${postPrefix}`)
    const postsRef = db().collection(`communities/${postPrefix}/posts`).doc()
    const membersRef = db().collection(`communities/${postPrefix}/members`).doc(uid)
    const userRef = db().doc(`users/${uid}`)
    const userData = {
      community: communityRef,
      displayName: `${profile.first.value} ${profile.last.value}`,
      firstName: profile.first.value,
      lastName: profile.last.value,
      photoURL: profile.avatar.value,
      postalCode: profile.postalCode.value.replace(/\s/g, '')
    }

    return await db().runTransaction(async transaction => {
      const communityDoc = await transaction.get(communityRef)

      // If community doesn't exist add display name.
      if (!communityDoc.exists) {
        const displayName = postalCodes[postPrefix]
        transaction.set(communityRef, { displayName }, { merge: true })
      }

      // Add userdata to Members collection.
      transaction.set(membersRef, { ref: userRef, active: true }, { merge: true })

      // Add userdata to Users collection
      transaction.set(userRef, userData, { merge: true })
    })
  } catch (err) {
    console.log(err)
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
