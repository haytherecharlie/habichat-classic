import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pathOr } from 'ramda'
import { fetchCommunityPosts } from 'api/routes'

const useCommunity = cid => {
  const dispatch = useDispatch()
  const community = useSelector(s => pathOr(undefined, ['communities', cid], s))
  const posts = useSelector(s => pathOr({}, ['posts', cid], s))

  useEffect(() => {
    fetchCommunityPosts(cid)
    return () => dispatch({ type: 'MODAL', value: null })
  }, [])

  return [community, posts]
}

export default useCommunity
