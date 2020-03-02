import { https } from 'firebase-functions'
import { db, timestamp, auth } from 'services/firebase'

const register = async (req, res) => {
  try {
    const communityId = req.query.c
    const { email, firstname, lastname } = req.body
    const usersRef = db.collection(`users`)
    const { id } = usersRef.doc()
    const options = { community: communityId }
    const token = await auth.createCustomToken(id, options)
    const time = timestamp()
    await usersRef.doc(id).set({ email, firstname, lastname, updated: time, created: time, communities: [communityId], interests: [] })
    res.status(200).json({ token })
  } catch (err) {
    console.log(err)
    res.status(400).send(err)
  }
}

export default https.onRequest(register)
