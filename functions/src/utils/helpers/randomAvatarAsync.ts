import errors from 'config/errors.json'
import { db } from 'services/firebase'

const randomAvatarAsync = async () => {
  try {
    const doc = await db.doc('application/avatars').get()
    const data = doc.data()
    const avarr = Object.values(data)
    return avarr[Math.floor(Math.random() * (avarr.length - 1 - 0 + 1) + 0)]
  } catch (err) {
    throw { code: 'V005', message: errors['V005'] }
  }
}

export default randomAvatarAsync
