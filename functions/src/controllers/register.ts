import { https } from 'firebase-functions'
import dbCreateUserAsync from 'services/database/createUserAsync'
import createCustomTokenAsync from 'services/authentication/createCustomTokenAsync'

const register = async (req, res) => {
  try {
    const [uid, email] = await dbCreateUserAsync(req.body)
    const token = await createCustomTokenAsync(uid)
    return res.status(200).json({ uid, email, token })
  } catch (err) {
    res.status(400).json({ message: err })
  }
}

export default https.onRequest(register)
