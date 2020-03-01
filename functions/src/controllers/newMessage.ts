import { https } from 'firebase-functions'
import { db } from 'services/firebase'

const newMessage = async (req, res) => {
  try {
    const communityId = req.query.c
    const { id, text, author, image, updated, created } = req.body
    const messagesRef = db.doc(`communities/${communityId}/messages/${id}`)
    await messagesRef.set({ text, author, image, updated, created, server: true })
    res.sendStatus(200)
  } catch (err) {
    res.status(400).send(err)
  }
}

export default https.onRequest(newMessage)
