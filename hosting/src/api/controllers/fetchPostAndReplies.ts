import pathOr from 'ramda.pathor'
import getPosts from 'api/utils/getPost'
import getReplies from 'api/utils/getReplies'
import store from 'services/redux'

const fetchPostAndReplies = async (cid, pid) => {
  try {
    const state = store.getState()
    const post = pathOr(undefined, ['communities', cid, 'posts', pid], state) || await getPosts(cid, pid)
    const replies = pathOr(undefined, ['communities', cid, 'posts', pid, 'replies'], state) || await getReplies(cid, pid)
    store.dispatch({ type: 'POST', cid, pid, data: { ...post, replies } })
  } catch (err) {
    console.error(err)
    throw err
  }
}

export default fetchPostAndReplies
