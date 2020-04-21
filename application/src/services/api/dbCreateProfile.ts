import { auth, db } from 'services/firebase'

const dbCreateProfile = async (first, last, postalCode) => {
  try {
    const user = auth().currentUser
    console.log(user)
  } catch (err) {}
}

export default dbCreateProfile
