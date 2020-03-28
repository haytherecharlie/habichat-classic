import { https } from 'firebase-functions'
import { db, auth, timestamp } from 'services/firebase'
import errors from 'config/errors.json'
import { vName, vPass, vEmail, getAvatarAsync } from 'utils/helpers'

const authCreateUserAsync = async user => {
  try {
    return await auth.createUser({ ...user, disabled: false, emailVerified: false })
  } catch (err) {
    throw errors['V006']
  }
}

const dbCreateUserAsync = async (ref, user) => {
  try {
    return await ref.set({ ...user, joined: timestamp() })
  } catch (err) {
    throw errors['V007']
  }
}

const createUser = async (req, res) => {
  try {
    const { email, password, displayName, community = 'pyNBzg3V742S5v8gWfRB' } = req.body
    const [photoURL] = await Promise.all([getAvatarAsync(), vName(displayName), vEmail(email), vPass(password)])
    const ref = db.collection(`users`).doc()
    const [user] = await Promise.all([
      authCreateUserAsync({ displayName, email, password, photoURL, uid: ref.id }),
      dbCreateUserAsync(ref, { displayName, photoURL, community })
    ])
    return res.status(200).json({ code: 'auth/register-success', data: { user } })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ code: err, data: {} })
  }
}

export default https.onRequest(createUser)
