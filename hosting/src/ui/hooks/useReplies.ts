import pathOr from 'ramda.pathor'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCommunityPostReplies } from 'api/routes'

const useReplies = (cid, pid) => {
  const dispatch = useDispatch()
  const community = useSelector(s => pathOr({ displayName: '' }, ['communities', cid], s))
  const post = useSelector(s => pathOr(undefined, ['posts', cid, pid], s))
  const replies = useSelector(s => pathOr({}, ['replies', pid], s))

  useEffect(() => {
    fetchCommunityPostReplies(cid, pid)
    return () => dispatch({ type: 'MODAL', value: null })
  }, [])

  return [community, post, replies]
}

export default useReplies
