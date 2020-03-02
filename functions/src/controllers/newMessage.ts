import { https } from 'firebase-functions'
import { db, timestamp } from 'services/firebase'

const newMessage = async (req, res) => {
  try {
    const communityId = req.query.c
    const { id, text, author, image } = req.body
    const time = timestamp()
    const messagesRef = db.doc(`communities/${communityId}/messages/${id}`)
    await messagesRef.set({ text, author, image, updated: time, created: time, server: true })
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.status(400).send(err)
  }
}

export default https.onRequest(newMessage)
