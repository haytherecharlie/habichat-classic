import { db } from 'services/firebase'

interface UserRef {
  get: Function
}

const communityPosts = async (req, res) => {
  try {
    // Postal Code from req
    const { cid, pid } = req.params

    // References
    const postRef = db().doc(`communities/${cid}/posts/${pid}`)

    // Fetch Community Doc and Posts Collection from Refs.
    const postDoc = await postRef.get()

    // Extract Posts (Messages) and Members (Users) from Posts Collection.
    const { post, member } = await asyncGetPostsAndMembers(postDoc)

    // return community, posts and members
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    return res.status(200).json({ status: 'success', data: { post, member } })
  } catch (err) {
    return res.status(400).json({ status: 'error', data: err })
  }
}

const asyncGetPostsAndMembers = async postDoc => {
  try {
    // Get Message Refs from the Posts Collection
    const messageDoc: Object = await db().doc(`messages/${postDoc.data().messageID}`).get()

    // Extract Messages and User References from Message References.
    const { message, userRef } = extractMessageAndUserRef(messageDoc)

    // Get Unique User Documents
    const user = await asyncFetchUser(userRef)

    // Return Posts (Messages) and Members (Users)
    return { post: message, member: user }
  } catch (err) {
    throw new Error('error fetching docs from collection')
  }
}

export const asyncFetchUser = async (userRef: UserRef) => {
  try {
    // Get User Document
    const userDoc = await userRef.get()

    // Extract necessary data only
    const { displayName, photoURL } = userDoc.data()

    // return accumulator
    return { displayName, photoURL }
  } catch (err) {
    throw new Error('error fetching users from references')
  }
}

const extractMessageAndUserRef = messageDoc => {
  try {
    // Get Message Document and User Reference
    const msgData = messageDoc.data()
    const userID = msgData.userID

    // Return Accumulator
    return { message: msgData, userRef: db().doc(`users/${userID}`) }
  } catch (err) {
    throw new Error('error extracting message data and user references.')
  }
}

export default communityPosts
