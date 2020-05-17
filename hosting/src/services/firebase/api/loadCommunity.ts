import { db } from 'services/firebase'

const asyncLoadCommunity = async postalCode => {
  try {
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
    return { community, posts, members, status: 'success' }
  } catch (err) {
    console.log(err.message)
  }
}

const asyncGetPostsAndMembers = async postsCollection => {
  try {
    // Get Message Refs from the Posts Collection
    const messageRefs = await Promise.all(postsCollection.docs.map(postDoc => db().doc(`messages/${postDoc.data().messageID}`).get()))

    // Extract Messages and User References from Message References.
    const { messages, userRefs } = messageRefs.reduce((acc, msgRef) => extractMessageAndUserRef(acc, msgRef), { messages: {}, userRefs: {} })

    // Get Unique User Documents
    const users = await asyncFetchUsers(userRefs)

    // Return Posts (Messages) and Members (Users)
    return { posts: messages, members: users }
  } catch (err) {
    console.error('error fetching docs from collection')
    throw err
  }
}

export const asyncFetchUsers = async userRefs => {
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
  } catch(err) {
    console.error('error fetching users from references')
    throw err
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
  } catch(err) {
    console.error('error extracting message data and user references.')
    throw err
  }
}

export default asyncLoadCommunity
