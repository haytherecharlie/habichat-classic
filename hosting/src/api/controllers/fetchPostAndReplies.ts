import pathOr from 'ramda.pathor'
import readPost from 'api/utils/readPost'
import readReplies from 'api/utils/readReplies'
import store from 'services/redux'

const fetchPostAndReplies = async (cid, pid) => {
  try {
    const state = store.getState()
    const post = pathOr(undefined, ['communities', cid, 'posts', pid], state) || await readPost(cid, pid)
    const replies = pathOr(undefined, ['communities', cid, 'posts', pid, 'replies'], state) || await readReplies(cid, pid)
    store.dispatch({ type: 'POST', cid, pid, data: { ...post, replies } })
  } catch (err) {
    console.error(err)
    throw err
  }
}

export default fetchPostAndReplies
