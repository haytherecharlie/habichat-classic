import pathOr from 'ramda.pathor'
import getCommunity from 'api/utils/getCommunity'
import getPosts from 'api/utils/getPosts'
import store from 'services/redux'

const fetchCommunity = async cid => {
  try {
    const timestamp = pathOr(undefined, ['communities', 'postsInfo', 'latestPost', 'timestamp'], store.getState())
    const community = await getCommunity(cid)
    const posts = await getPosts(cid, timestamp)
    return store.dispatch({ type: 'COMMUNITY', cid, community, posts })
  } catch (err) {
    console.error(err)
    throw err
  }
}

export default fetchCommunity
