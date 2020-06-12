import getCommunityDoc from 'api/utils/getCommunityDoc'
import streamPostReplies from 'api/utils/streamPostReplies'

const fetchPostReplies = async (cid, pid) => {
  try {
    await getCommunityDoc(cid)
    return streamPostReplies(pid)
  } catch (err) {
    console.error(err)
    throw err
  }
}

export default fetchPostReplies
