import { auth } from 'services/firebase'
import errors from 'config/errors.json'

const createCustomTokenAsync = async uid => {
  try {
    let claims = { manager: false }
    return await auth.createCustomToken(uid, claims)
  } catch (err) {
    throw errors['A001']
  }
}

export default createCustomTokenAsync
