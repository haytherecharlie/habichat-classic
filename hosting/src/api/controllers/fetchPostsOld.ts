import pathOr from 'ramda.pathor'
import readPosts from 'api/utils/readPosts'
import readPostsNotInRedux from 'api/utils/readPostsNotInRedux'
import store from 'services/redux'

const fetchPosts = async (cid, start = 0, end = 50) => {
  // check newPosts
  const newPosts = pathOr([], ['communities', cid, 'newPosts'], store.getState())

  if (newPosts.length) {
    // fetch newPosts
    const postsObj = await readPosts(newPosts)

    // save in store
    return store.dispatch({ type: 'POSTS', cid, value: postsObj })
  }
}

export default fetchPosts
