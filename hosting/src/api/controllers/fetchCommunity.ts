import pathOr from 'ramda.pathor'
import readCommunity from 'api/utils/readCommunity'
import readPosts from 'api/utils/readPosts'
import store from 'services/redux'

const fetchCommunity = async cid => {
  try {
    const timestamp = pathOr(undefined, ['communities', 'postsInfo', 'latestPost', 'timestamp'], store.getState())
    const community = await readCommunity(cid)
    const posts = await readPosts(cid, timestamp)
    return store.dispatch({ type: 'COMMUNITY', cid, community, posts })
  } catch (err) {
    console.error(err)
    throw err
  }
}

export default fetchCommunity
