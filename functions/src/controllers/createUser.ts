import { https } from 'firebase-functions'
import { auth } from 'services/firebase'
import randomAvatarAsync from 'utils/helpers/randomAvatarAsync'
import validateName from 'utils/helpers/validateName'
import validateEmail from 'utils/helpers/validateUniqueEmailAsync'
import validatePass from 'utils/helpers/validatePass'

const createUser = async (req, res) => {
  try {
    const { email, password, displayName } = req.body
    validateName(displayName)
    validateEmail(email)
    validatePass(password)
    const photoURL = await randomAvatarAsync()
    const profile = await auth.createUser({
      displayName,
      email,
      password,
      photoURL,
      emailVerified: false,
      disabled: false
    })
    return res.status(200).json({ code: 'S001', message: 'Successfully created new user:', data: profile })
  } catch ({ code, message }) {
    return res.status(400).json({ code, message, data: {} })
  }
}

export default https.onRequest(createUser)
