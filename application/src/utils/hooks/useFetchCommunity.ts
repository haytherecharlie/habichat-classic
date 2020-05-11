import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { auth, dbGet } from 'services/firebase'

const useFetchCommunity = () => {
  const [loaded, setLoaded] = useState(false)
  const communityRef = useSelector(s => s.user.profile.communities[0])

  const fetchCommunityData = async () => {
    try {
      const community = await communityRef.get()
      console.log(community.data())
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchCommunityData()
  }, [])

  return loaded
}

export default useFetchCommunity
