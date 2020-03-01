import { getVerifyDoc, getCustomToken, deleteVerifyDoc } from 'services/firebase'

const getDbCodeAndId = async email => {
  const { code, id } = await getVerifyDoc(email)
    .catch(() => { throw `Verify Auth: Failed getting verify doc. - ${email}` })
  
  return { id, dbCode: code }
}

const getTokenDeleteDoc = async (id, email) => {
  const token = await getCustomToken(id, {})
    .catch(() => { throw `Verify Auth: Failed getting custom token. - ${id}` })
  
  await deleteVerifyDoc(email)
    .catch(() => { throw `Verify Auth: Failed deleting verify doc. - ${id}` })
  return token
}

const verifyController = async ({ body: { code, email } }, res) => {
  try {
    const { id, dbCode } = await getDbCodeAndId(email)
    if (code === dbCode) {
      const token = await getTokenDeleteDoc(id, email)
      return res.status(200).json({ message: token })
    }
    throw `Verify Auth: Invalid verification code. - ${id}`
  } catch (err) {
    return res.status(400).json({ message: err })
  }
}

export default verifyController
