import { getUserDocId, setUserDoc, setVerifyDoc } from 'services/firebase'
import { sendVerificationEmail } from 'utils/nodemailer'
import createNewUser from 'utils/createNewUser'
import createNewCode from 'utils/createNewCode'

const createOrGetUserId = async (email) => {
  const userId = await getUserDocId(email)
    .catch(() => { throw `Email Auth: Failed getting user doc id. - ${email}` })
  return userId ? userId : await setUserDoc(createNewUser(email))
    .catch(() => { throw `Email Auth: Failed setting user doc. - ${email}` })
}

const createVerificationFlow = async (email, userId, newCode) => {
  await setVerifyDoc(userId, email, newCode)
    .catch(() => { throw `Email Auth: Failed setting verify doc. - ${userId}`})
  return sendVerificationEmail(email, newCode)
}

const emailController = async ({ body: { email } }, res) => {
  try {
    const userId = await createOrGetUserId(email)
    const newCode = createNewCode()
    await createVerificationFlow(email, userId, newCode)
    return res.status(200).json({ message: 'success' })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ message: err })
  }
}

export default emailController
