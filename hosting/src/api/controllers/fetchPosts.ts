import pathOr from 'ramda.pathor'
import readPosts from 'api/utils/readPosts'
import readPostsNotInRedux from 'api/utils/readPostsNotInRedux'
import store from 'services/redux'

const fetchPosts = async (cid, start = 0, end = 50) => {
  // check redux
  const reduxPostIDs = pathOr(undefined, ['communities', cid, 'postIDs'], store.getState())
  const reduxPosts = pathOr(undefined, ['posts', cid], store.getState())

  // posts in redux -> need to add persist
  if (reduxPosts) {
    const postsObj = await readPostsNotInRedux(Object.entries(reduxPostIDs).slice(start, end), reduxPosts)
    return store.dispatch({ type: 'POSTS', cid, value: postsObj })
  }

  // no posts in redux
  const postsObj = await readPosts(Object.keys(reduxPostIDs).slice(start, end))
  return store.dispatch({ type: 'POSTS', cid, value: postsObj })
}

export default fetchPosts
