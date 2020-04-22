import { auth, dbSet } from 'services/firebase'
import store from 'services/redux'
import * as A from 'services/redux/actions'

const formatUser = (currentUser, profile) => ({
  displayName: `${profile.first.value} ${profile.last.value}`,
  firstName: profile.first.value,
  lastName: profile.last.value,
  photoURL: profile.avatar.value,
  uid: currentUser.uid
})

const createDbUser = async user => {
  return await dbSet(`users/${user.uid}`, user).catch(err => console.log(err))
}

const updateAuthUser = async (currentUser, user) => {
  return await currentUser
    .updateProfile({ displayName: user.displayName, photoURL: user.photoURL })
    .catch(err => console.log(err))
}

const updateReduxUser = async user => {
  return store.dispatch({ type: A.UPDATE_USER_PROFILE, value: user, screen: 'community' })
}

const dbCreateProfile = async profile => {
  const currentUser = auth().currentUser
  const user = formatUser(currentUser, profile)
  await Promise.all([createDbUser(user), updateAuthUser(currentUser, user), updateReduxUser(user)]).catch(() => {
    throw 'error creating user profile'
  })
  return store.dispatch({ type: A.NAVIGATE, screen: 'initialize-community' })
}

export default dbCreateProfile
