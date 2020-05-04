import { auth, dbGet } from 'services/firebase'
import * as A from 'services/redux/actions'
import store from 'services/redux'

const stateChanged = () => {
  auth().onAuthStateChanged(async currentUser => {
    if (currentUser) {
      const dbUser = await dbGet(`users/${currentUser.uid}`)
      if (dbUser.exists) {
        return store.dispatch({ type: A.SIGN_IN, profile: dbUser.data(), screen: 'community' })
      }
      return store.dispatch({ type: A.SIGN_IN, profile: null, screen: 'create-profile' })
    }
    return store.dispatch({ type: A.SIGN_OUT })
  })
}

export default stateChanged
