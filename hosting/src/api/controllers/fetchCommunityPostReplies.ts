import getCommunity from 'api/utils/getCommunity'
import getPost from 'api/utils/getPost'
import streamReplies from 'api/utils/streamReplies'

const fetchCommunityPostReplies = async (cid, pid) => {
  try {
    await Promise.all([getCommunity(cid), getPost(cid, pid)])
    return streamReplies(pid)
  } catch (err) {
    console.error(err)
    throw err
  }
}

export default fetchCommunityPostReplies
