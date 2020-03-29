import { https } from 'firebase-functions'
import { db, auth, timestamp } from 'services/firebase'
import errors from 'config/errors.json'
import { vName, vPass, vEmail, getAvatarAsync } from 'utils/helpers'

const authCreateUserAsync = async user => {
  try {
    return await auth.createUser({ ...user, disabled: false, emailVerified: false })
  } catch (err) {
    throw err.code || errors['V006']
  }
}

const dbCreateUserAsync = async (ref, user) => {
  try {
    return await ref.set({ ...user, joined: timestamp() })
  } catch (err) {
    throw err.code || errors['V007']
  }
}

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body
    const community = 'pyNBzg3V742S5v8gWfRB'
    const [photoURL] = await Promise.all([getAvatarAsync(), vName(firstName), vName(lastName), vEmail(email), vPass(password)])
    const ref = db.collection(`users`).doc()
    const [user] = await Promise.all([
      authCreateUserAsync({ displayName: firstName, email, password, photoURL, uid: ref.id }),
      dbCreateUserAsync(ref, { firstName, lastName, photoURL, community })
    ])
    return res.status(200).json({ code: 'auth/register-success', data: { user } })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ code: err })
  }
}

export default https.onRequest(createUser)
