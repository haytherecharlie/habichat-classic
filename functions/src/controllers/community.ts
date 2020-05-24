import { db } from 'services/firebase'

interface UserRef {
  get: Function
}

const asyncLoadCommunity = async (req, res) => {
  try {
    // Postal Code from req
    const postalCode = req.params.id

    // References
    const communityRef = db().doc(`communities/${postalCode}`)
    const postsRef = db().collection(`communities/${postalCode}/posts`).limit(50)

    // Fetch Community Doc and Posts Collection from Refs.
    const [communityDoc, postsCollection] = await Promise.all([communityRef.get(), postsRef.get()])

    // Get Community Data
    const community = communityDoc.data()

    // Extract Posts (Messages) and Members (Users) from Posts Collection.
    const { posts, members } = await asyncGetPostsAndMembers(postsCollection)

    // return community, posts and members
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    return res.status(200).json({ status: 'success', data: { community, posts, members } })
  } catch (err) {
    return res.status(400).json({ status: 'error', data: err })
  }
}

const asyncGetPostsAndMembers = async postsCollection => {
  try {
    // Get Message Refs from the Posts Collection
    const messageRefs: Array<Object> = await Promise.all(
      postsCollection.docs.map(postDoc => db().doc(`messages/${postDoc.data().messageID}`).get())
    )

    // Extract Messages and User References from Message References.
    const { messages, userRefs } = messageRefs.reduce((acc, msgRef) => extractMessageAndUserRef(acc, msgRef), {
      messages: {},
      userRefs: {}
    })

    // Get Unique User Documents
    const users = await asyncFetchUsers(userRefs)

    // Return Posts (Messages) and Members (Users)
    return { posts: messages, members: users }
  } catch (err) {
    throw new Error('error fetching docs from collection')
  }
}

export const asyncFetchUsers = async (userRefs: UserRef) => {
  try {
    // Iterate User References
    return Object.values(userRefs).reduce(async (acc, userRef) => {
      // Get User Document
      const userDoc = await userRef.get()

      // Extract necessary data only
      const { displayName, photoURL } = userDoc.data()

      // Assign data to accumulator
      acc[userDoc.id] = { displayName, photoURL }

      // return accumulator
      return acc
    }, {})
  } catch (err) {
    throw new Error('error fetching users from references')
  }
}

const extractMessageAndUserRef = (acc, msgRef) => {
  try {
    // Get Message Document and User Reference
    const msgDoc = msgRef.data()
    const userID = msgDoc.userID

    // Assign messages and userRefs
    acc.messages[msgRef.id] = msgDoc
    acc.userRefs[userID] = db().doc(`users/${userID}`)

    // Return Accumulator
    return acc
  } catch (err) {
    throw new Error('error extracting message data and user references.')
  }
}

export default asyncLoadCommunity
