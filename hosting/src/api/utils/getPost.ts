import { pathOr } from 'ramda'
import { db } from 'services/firebase'
import store from 'services/redux'

const getPost = async (cid, pid) => {
  try {
    const reduxPost = pathOr(undefined, ['posts', cid, pid], store.getState())
    if (reduxPost) return reduxPost
    const postReq = await db().doc(`posts/${pid}`).get()
    const postDoc = postReq.data()
    console.log({ type: 'POST', cid, post: { [pid]: postDoc } })
    store.dispatch({ type: 'POST', cid, post: { [pid]: postDoc } })
    return postDoc
  } catch (err) {
    console.error(err)
    throw err
  }
}

export default getPost
