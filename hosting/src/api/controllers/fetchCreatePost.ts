import { pathOr } from 'ramda'
import createPost from 'api/utils/createPost'
import store from 'services/redux'

const fetchCreatePost = async (cid, text) => {
  try {
    const state = store.getState()
    const account = pathOr(undefined, ['account'], state)

    if (!account.displayName || !account.photoURL || !account.userID) throw new Error('Account not found')

    const newPost = await createPost(cid, text, account)
  } catch (err) {
    throw err
  }
}

export default fetchCreatePost
