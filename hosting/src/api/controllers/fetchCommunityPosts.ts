import getCommunity from 'api/utils/getCommunity'
import streamPosts from 'api/utils/streamPosts'

const fetchCommunityPosts = async cid => {
  try {
    await getCommunity(cid)
    return streamPosts(cid)
  } catch (err) {
    console.error(err)
    throw err
  }
}

export default fetchCommunityPosts
