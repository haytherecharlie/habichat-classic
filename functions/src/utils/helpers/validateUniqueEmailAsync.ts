import { db } from 'services/firebase'
import errors from 'config/errors.json'

const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
const validateUniqueEmail = async (email) => {
  try {
    if (emailRegex.test(email)) {
      const { size } = await db.collection('users').where('email', '==', email).get()
      if (!size) {
        return email
      }
      throw errors["V003"]
    }
    throw errors['V001'] // Invalid Email
  } catch (err) {
    throw err
  }
}

export default validateUniqueEmail