import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pathOr } from 'ramda'
import { streamCommunity } from 'api/routes'

const useCommunity = cid => {
  const dispatch = useDispatch()
  const community = useSelector(s => pathOr(undefined, ['communities', cid], s))

  useEffect(() => {
    const listener = streamCommunity(cid)
    return () => {
      listener()
      dispatch({ type: 'MODAL', value: null })
    }
  }, [])

  return community
}

export default useCommunity
