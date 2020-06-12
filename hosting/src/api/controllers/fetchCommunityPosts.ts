import getCommunityDoc from 'api/utils/getCommunityDoc'
import streamCommunityPosts from 'api/utils/streamCommunityPosts'

const fetchCommunityPosts = async cid => {
  try {
    await getCommunityDoc(cid)
    return streamCommunityPosts(cid)
  } catch (err) {
    console.error(err)
    throw err
  }
}

export default fetchCommunityPosts
