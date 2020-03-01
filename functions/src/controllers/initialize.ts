import { https } from 'firebase-functions'
import { db } from 'services/firebase'

const initialize = async (req, res) => {
  try {
    // const decodedIdToken = await admin.auth().verifyIdToken(idToken)
    const communityId = req.query.c
    const communityRef = db.doc(`communities/${communityId}`)
    const messagesRef = db.collection(`communities/${communityId}/messages`).limit(50)
    const membersRef = db.collection(`communities/${communityId}/members`).limit(50)
    const [community, messages, members] = await Promise.all([communityRef.get(), messagesRef.get(), membersRef.get()])

    if (!community.exists) throw `Cannot get data for community: ${communityId}`

    const messagesData = []
    messages.forEach(doc => messagesData.push({ id: doc.id, ...doc.data() }))

    const membersData = []
    members.forEach(doc => membersData.push({ id: doc.id, ...doc.data() }))
    membersData.sort(() => 0.5 - Math.random())

    res.status(200).json({
      community: community.data(),
      messages: messagesData,
      members: membersData
    })
  } catch (err) {
    res.status(400).send(err)
  }
}

export default https.onRequest(initialize)
