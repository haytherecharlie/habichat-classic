import errors from 'config/errors.json'
import { db } from 'services/firebase'

export const vName = name => {
  const nRegex = /^([ \u00c0-\u01ffa-zA-Z'\-]).{2,30}/
  if (!nRegex.test(name)) throw errors['V004']
}

export const vPass = pass => {
  const pRegex = /^.{6,}$/
  if (!pRegex.test(pass)) throw errors['V002']
}

export const vEmail = async email => {
  const eRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  if (!eRegex.test(email)) throw errors['V001']
}

export const getAvatarAsync = async () => {
  try {
    const doc = await db.doc('application/avatars').get()
    const avarr = Object.values(doc.data()) || []
    return avarr[Math.floor(Math.random() * (avarr.length - 1 - 0 + 1) + 0)]
  } catch (err) {
    throw errors['V005']
  }
}
