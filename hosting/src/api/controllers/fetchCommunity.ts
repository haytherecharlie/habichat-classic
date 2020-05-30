import pathOr from 'ramda.pathor'
import getCommunityInfo from 'api/utils/getCommunityInfo'
import getCommunityPosts from 'api/utils/getCommunityPosts'
import store from 'services/redux'

const fetchCommunity = async cid => {
  try {
    const reduxTimestamp = pathOr(undefined, ['communities', 'postsInfo', 'latestPost', 'timestamp'], store.getState())
    const communityInfo = await getCommunityInfo(cid)
    const communityPosts = await getCommunityPosts(cid, reduxTimestamp)
    store.dispatch({ type: 'COMMUNITY', cid, data: { ...communityInfo, posts: communityPosts } })
  } catch (err) {
    console.error(err)
    throw err
  }
}

export default fetchCommunity
