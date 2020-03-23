import { db, timestamp } from 'services/firebase'
import validateUniqueEmailAsync from 'utils/helpers/validateUniqueEmailAsync'
import validateName from 'utils/helpers/validateName'
import validatePass from 'utils/helpers/validatePass'

const createUser = async data => {
  try {
    const email = await validateUniqueEmailAsync(data.email)
    const pass = validatePass(data.pass)
    const first = validateName(data.first, 'first')
    const last = validateName(data.last, 'last')
    const docRef = db.collection('users').doc()

    await docRef.set({
      address: '',
      communities: [],
      updated: timestamp(),
      created: timestamp(),
      email: email,
      first: first,
      interests: [],
      last: last,
      latLng: [],
      picture: '',
      verified: false
    })
    return [docRef.id, email, pass]
  } catch (err) {
    throw err
  }
}

export default createUser
