import pathOr from 'ramda.pathor'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostReplies } from 'api/routes'

const useReplies = (cid, pid) => {
  const dispatch = useDispatch()
  const community = useSelector(s => pathOr(undefined, ['communities', cid], s))
  const post = useSelector(s => pathOr({}, ['posts', cid, pid], s))
  const replies = useSelector(s => pathOr({}, ['replies', pid], s))

  useEffect(() => {
    fetchPostReplies(cid, pid)
    return () => dispatch({ type: 'MODAL', value: null })
  }, [])

  return [community, post, replies]
}

export default useReplies
